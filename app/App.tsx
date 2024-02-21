import React, {useEffect, useState} from 'react';
import {API_getCategories} from './api/api.ts';
import {Category} from './interfaces/Category.ts';
import Tab from './components/Tab/Tab.tsx';
import {ScrollView} from 'react-native';
import {AppStyles} from './App.styles.ts';

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    API_getCategories().then(setCategories);
  }, []);

  return (
    <ScrollView contentContainerStyle={AppStyles.container}>
      {categories.map((category, index) => (
        <Tab
          isActive={activeTabIndex === index}
          category={category}
          key={category.id}
          setActive={() => setActiveTabIndex(index)}
        />
      ))}
    </ScrollView>
  );
};

export default App;
