import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTags} from '../../context/TagsContext.tsx';
import {SaveStyles} from './Save.styles.ts';

const Save = () => {
  const {activeCategoryId, tags, synchronizedCategories, saveTags} = useTags();

  if (
    !activeCategoryId ||
    !tags[activeCategoryId]?.length ||
    synchronizedCategories.includes(activeCategoryId)
  ) {
    return null;
  }

  return (
    <TouchableOpacity onPress={saveTags} style={SaveStyles.container}>
      <Text>Zapisz</Text>
    </TouchableOpacity>
  );
};

export default Save;
