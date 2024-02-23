import React, {useEffect, useState} from 'react';
import {API_getCategories} from './api/api.ts';
import {Category} from './interfaces/Category.ts';
import Tab from './components/Tab/Tab.tsx';
import {ScrollView, TouchableOpacity} from 'react-native';
import {AppStyles} from './App.styles.ts';
import Box from './components/Box/Box.tsx';
import {TagsProvider} from './context/TagsContext.tsx';
import LevelPicker from './components/LevelPicker/LevelPicker.tsx';
import ConfirmationOverlay from './components/ConfirmationOverlay/ConfirmationOverlay.tsx';
import Save from './components/Save/Save.tsx';

const App = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    API_getCategories().then(setCategories);
  }, []);

  return (
    <TagsProvider>
      <LevelPicker>
        <ConfirmationOverlay>
          <ScrollView
            contentContainerStyle={AppStyles.container}
            style={AppStyles.contentContainer}>
            <Box />
            {categories.map((category, index) => (
              <Tab
                category={category}
                key={category.id}
                previousCategoryId={
                  index ? categories[index - 1].id : undefined
                }
              />
            ))}
          </ScrollView>
          <Save />
        </ConfirmationOverlay>
      </LevelPicker>
    </TagsProvider>
  );
};

export default App;
