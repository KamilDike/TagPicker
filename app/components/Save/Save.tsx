import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTags} from '../../context/TagsContext.tsx';
import {API_saveTags} from '../../api/api.ts';
import {SaveStyles} from './Save.styles.ts';

const Save = () => {
  const {tags, activeCategoryId} = useTags();

  const myTagsPayload = activeCategoryId
    ? tags[activeCategoryId].map(myTag => ({id: myTag.id, level: myTag.level}))
    : [];

  return (
    <TouchableOpacity
      onPress={() => {
        API_saveTags(myTagsPayload);
      }}
      style={SaveStyles.container}
    />
  );
};

export default Save;
