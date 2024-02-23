import React from 'react';
import {BoxStyles} from './Box.styles.ts';
import {Text, View} from 'react-native';
import {useTags} from '../../context/TagsContext.tsx';

const Box = () => {
  const {tags, activeCategoryId} = useTags();

  return (
    <View style={BoxStyles.container}>
      {activeCategoryId &&
        tags[activeCategoryId]?.map(tag => (
          <Text key={tag.id}>{tag.name}</Text>
        ))}
    </View>
  );
};

export default Box;
