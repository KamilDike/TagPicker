import React, {createContext, useContext, useEffect, useState} from 'react';
import {Tag, TagWithLevel} from '../interfaces/Tag.ts';
import {API_getCategories, API_saveTags} from '../api/api.ts';
import {Category} from '../interfaces/Category.ts';

interface TagsContextProps {
  tags: Record<string, TagWithLevel[]>;
  addTag: (tag: Tag) => void;
  addLevelTag: (tag: TagWithLevel) => void;
  removeTag: (tagId: string) => void;
  levelTagAddition: undefined | Tag;
  clearLevelTagAddition: () => void;
  activeCategoryId: string | undefined;
  setActiveCategoryId: (category: string) => void;
  saveTags: () => void;
  categories: Array<Category>;
  setConfirmationCategoryId: (value: string | undefined) => void;
  confirmationCategoryId: string | undefined;
  synchronizedCategories: Array<string>;
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
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [synchronizedCategories, setSynchronizedCategories] = useState<
    Array<string>
  >([]);
  const [confirmationCategoryId, setConfirmationCategoryId] =
    useState<string>();

  useEffect(() => {
    API_getCategories().then(newCategories => {
      setCategories(newCategories);
      setSynchronizedCategories(newCategories.map(category => category.id));
    });
  }, []);

  const addTag = (tag: Tag) => {
    if (!activeCategoryId) {
      return;
    }
    if (tag.isLevelAvailable) {
      setLevelTagAddition(tag);
    } else {
      const newTags = [...(tags[activeCategoryId] || []), {...tag, level: 0}];
      setTags(prevState => ({...prevState, [activeCategoryId]: newTags}));
      const newCategories = synchronizedCategories.filter(
        synchronizeCategory => synchronizeCategory !== activeCategoryId,
      );
      setSynchronizedCategories(newCategories);
    }
  };

  const addLevelTag = (tag: TagWithLevel) => {
    if (!activeCategoryId) {
      return;
    }

    const newTags = [...(tags[activeCategoryId] || []), tag];
    setTags(prevState => ({...prevState, [activeCategoryId]: newTags}));
    setLevelTagAddition(undefined);
    const newCategories = synchronizedCategories.filter(
      synchronizeCategory => synchronizeCategory !== activeCategoryId,
    );
    setSynchronizedCategories(newCategories);
  };

  const clearLevelTagAddition = () => {
    setLevelTagAddition(undefined);
  };

  const removeTag = (tagId: string) => {
    if (!activeCategoryId) {
      return;
    }

    const newTags = tags[activeCategoryId].filter(({id}) => id !== tagId);
    setTags(prevState => ({...prevState, [activeCategoryId]: newTags}));
    const newCategories = synchronizedCategories.filter(
      synchronizeCategory => synchronizeCategory !== activeCategoryId,
    );
    setSynchronizedCategories(newCategories);
  };

  const saveTags = () => {
    if (
      !activeCategoryId ||
      synchronizedCategories.includes(activeCategoryId)
    ) {
      return;
    }
    setSynchronizedCategories(prevState => [...prevState, activeCategoryId]);

    const myTagsPayload = activeCategoryId
      ? tags[activeCategoryId]?.map(myTag => ({
          id: myTag.id,
          level: myTag.level,
        }))
      : [];

    if (myTagsPayload?.length) {
      API_saveTags(myTagsPayload);
    }

    const currentActiveCategoryIndex = categories.findIndex(
      category => category.id === activeCategoryId,
    );
    if (
      currentActiveCategoryIndex === categories.length - 1 ||
      !myTagsPayload?.length
    ) {
      return;
    }
    setActiveCategoryId(categories[currentActiveCategoryIndex + 1].id);
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
        categories,
        confirmationCategoryId,
        setConfirmationCategoryId,
        synchronizedCategories,
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
