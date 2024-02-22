import React from 'react';
import {BoxStyles} from './Box.styles.ts';
import {Text, View} from 'react-native';
import {useTags} from '../../context/TagsContext.tsx';

const Box = () => {
  const {tags} = useTags();

  return (
    <View style={BoxStyles.container}>
      {tags.map(tag => (
        <Text key={tag.id}>{tag.name}</Text>
      ))}
    </View>
  );
};

export default Box;
