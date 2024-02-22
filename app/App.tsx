import React, {useEffect, useState} from 'react';
import {API_getCategories} from './api/api.ts';
import {Category} from './interfaces/Category.ts';
import Tab from './components/Tab/Tab.tsx';
import {ScrollView} from 'react-native';
import {AppStyles} from './App.styles.ts';
import Box from './components/Box/Box.tsx';
import {TagsProvider} from './context/TagsContext.tsx';
import LevelPicker from './components/LevelPicker/LevelPicker.tsx';

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    API_getCategories().then(setCategories);
  }, []);

  return (
    <TagsProvider>
      <LevelPicker>
        <ScrollView contentContainerStyle={AppStyles.container}>
          <Box />
          {categories.map((category, index) => (
            <Tab
              isActive={activeTabIndex === index}
              category={category}
              key={category.id}
              setActive={() => setActiveTabIndex(index)}
            />
          ))}
        </ScrollView>
      </LevelPicker>
    </TagsProvider>
  );
};

export default App;
