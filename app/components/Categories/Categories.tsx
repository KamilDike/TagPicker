import React from 'react';
import {useTags} from '../../context/TagsContext.tsx';
import Tab from '../Tab/Tab.tsx';

const Categories = () => {
  const {categories} = useTags();

  return (
    <>
      {categories.map((category, index) => (
        <Tab
          category={category}
          key={category.id}
          previousCategoryId={index ? categories[index - 1].id : undefined}
        />
      ))}
    </>
  );
};

export default Categories;
