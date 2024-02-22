import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TabStyles} from './Tab.styles.ts';
import {API_getTags} from '../../api/api.ts';
import {Category} from '../../interfaces/Category.ts';
import {Tag} from '../../interfaces/Tag.ts';
import Pill from '../Pill/Pill.tsx';
import {useTags} from '../../context/TagsContext.tsx';

interface TabProps {
  category: Category;
  isActive?: boolean;
  setActive: () => void;
}

const Tab = ({category, isActive, setActive}: TabProps) => {
  const {tags: myTags, addTag, removeTag} = useTags();
  const [tags, setTags] = useState<Array<Tag>>([]);

  useEffect(() => {
    API_getTags(category.id).then(setTags);
  }, [category.id]);

  return isActive ? (
    <View style={TabStyles.container}>
      {tags.map(tag => {
        const isActive = myTags.some(myTag => myTag.id === tag.id);
        return (
          <Pill
            key={tag.id}
            tag={tag}
            isActive={isActive}
            onPress={() => (isActive ? removeTag(tag.id) : addTag(tag))}
          />
        );
      })}
    </View>
  ) : (
    <TouchableOpacity
      style={[TabStyles.container, TabStyles.inActive]}
      onPress={setActive}>
      <Text>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
