import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {TabStyles} from './Tab.styles.ts';
import {API_getTags} from '../../api/api.ts';
import {Category} from '../../interfaces/Category.ts';
import {Tag} from '../../interfaces/Tag.ts';
import Pill from '../Pill/Pill.tsx';
import {useTags} from '../../context/TagsContext.tsx';

interface TabProps {
  category: Category;
  previousCategoryId?: string;
}

const Tab = ({category, previousCategoryId}: TabProps) => {
  const {
    tags: myTags,
    addTag,
    removeTag,
    setActiveCategoryId,
    activeCategoryId,
  } = useTags();
  const [tags, setTags] = useState<Array<Tag>>([]);
  const isActive = activeCategoryId === category.id;

  useEffect(() => {
    API_getTags(category.id).then(setTags);
  }, [category.id]);

  const handleTabPress = () => {
    if (previousCategoryId && !myTags[previousCategoryId]?.length) {
      Alert.alert('Wypełnij poprzednie');
    } else {
      setActiveCategoryId(category.id);
    }
  };

  return isActive ? (
    <View style={TabStyles.container}>
      {tags.map(tag => {
        const isActivePill = myTags[category.id]?.some(
          myTag => myTag.id === tag.id,
        );
        return (
          <Pill
            key={tag.id}
            tag={tag}
            isActive={isActivePill}
            onPress={() =>
              isActivePill
                ? removeTag(category.id, tag.id)
                : addTag(category.id, tag)
            }
          />
        );
      })}
    </View>
  ) : (
    <TouchableOpacity
      style={[TabStyles.container, TabStyles.inActive]}
      onPress={handleTabPress}>
      <Text>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
