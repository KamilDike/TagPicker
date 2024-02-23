import React, {createContext, useContext, useState} from 'react';
import {Tag, TagPayload, TagWithLevel} from '../interfaces/Tag.ts';
import {API_saveTags} from '../api/api.ts';

interface TagsContextProps {
  tags: Record<string, TagWithLevel[]>;
  addTag: (category: string, tag: Tag) => void;
  removeTag: (category: string, tagId: string) => void;
  levelTagAddition: undefined | Tag;
  addLevelTag: (category: string, tag: TagWithLevel) => void;
  clearLevelTagAddition: () => void;
  activeCategoryId: string | undefined;
  setActiveCategoryId: (category: string) => void;
  saveTags: (category: string, tags: Array<TagPayload>) => void;
}

export const TagsContext = createContext<TagsContextProps | undefined>(
  undefined,
);

interface TagsProviderProps {
  children: React.ReactNode;
}

export const TagsProvider = ({children}: TagsProviderProps) => {
  const [tags, setTags] = useState<Record<string, Array<TagWithLevel>>>({});
  const [levelTagAddition, setLevelTagAddition] = useState<Tag>();
  const [activeCategoryId, setActiveCategoryId] = useState<string>();
  const [synchronizedCategories, setSynchronizedCategories] = useState<
    Array<string>
  >([]);

  const addTag = (category: string, tag: Tag) => {
    if (tag.isLevelAvailable) {
      setLevelTagAddition(tag);
    } else {
      const newTags = [...(tags[category] || []), {...tag, level: 0}];
      setTags(prevState => ({...prevState, [category]: newTags}));
      const newCategories = synchronizedCategories.filter(
        synchronizeCategory => synchronizeCategory !== category,
      );
      setSynchronizedCategories(newCategories);
    }
  };

  const addLevelTag = (category: string, tag: TagWithLevel) => {
    const newTags = [...(tags[category] || []), tag];
    setTags(prevState => ({...prevState, [category]: newTags}));
    setLevelTagAddition(undefined);
    const newCategories = synchronizedCategories.filter(
      synchronizeCategory => synchronizeCategory !== category,
    );
    setSynchronizedCategories(newCategories);
  };

  const clearLevelTagAddition = () => {
    setLevelTagAddition(undefined);
  };

  const removeTag = (category: string, tagId: string) => {
    const newTags = tags[category].filter(({id}) => id !== tagId);
    setTags(prevState => ({...prevState, [category]: newTags}));
    const newCategories = synchronizedCategories.filter(
      synchronizeCategory => synchronizeCategory !== category,
    );
    setSynchronizedCategories(newCategories);
  };

  const saveTags = (category: string, tags: Array<TagPayload>) => {
    if (synchronizedCategories.includes(category)) {
      return;
    }
    setSynchronizedCategories(prevState => [...prevState, category]);
    API_saveTags(tags);
  };

  return (
    <TagsContext.Provider
      value={{
        tags,
        addTag,
        removeTag,
        levelTagAddition,
        addLevelTag,
        clearLevelTagAddition,
        activeCategoryId,
        setActiveCategoryId,
        saveTags,
      }}>
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error('useTags must be used within a TagsProvider');
  }
  return context;
};
