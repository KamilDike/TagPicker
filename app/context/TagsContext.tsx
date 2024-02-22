import React, {createContext, useContext, useState} from 'react';
import {Tag, TagWithLevel} from '../interfaces/Tag.ts';

interface TagsContextProps {
  tags: TagWithLevel[];
  addTag: (tag: Tag) => void;
  removeTag: (tagId: string) => void;
  levelTagAddition: undefined | Tag;
  addLevelTag: (tag: TagWithLevel) => void;
  clearLevelTagAddition: () => void;
}

export const TagsContext = createContext<TagsContextProps | undefined>(
  undefined,
);

interface TagsProviderProps {
  children: React.ReactNode;
}

export const TagsProvider = ({children}: TagsProviderProps) => {
  const [tags, setTags] = useState<Array<TagWithLevel>>([]);
  const [levelTagAddition, setLevelTagAddition] = useState<Tag>();

  const addTag = (tag: Tag) => {
    if (tag.isLevelAvailable) {
      setLevelTagAddition(tag);
    } else {
      setTags(prevTags => [...prevTags, {...tag, level: 0}]);
    }
  };

  const addLevelTag = (tag: TagWithLevel) => {
    setTags(prevTags => [...prevTags, tag]);
    setLevelTagAddition(undefined);
  };

  const clearLevelTagAddition = () => {
    setLevelTagAddition(undefined);
  };

  const removeTag = (tagId: string) => {
    setTags(prevTags => prevTags.filter(({id}) => id !== tagId));
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
