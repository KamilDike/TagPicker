import React from 'react';
import {ScrollView} from 'react-native';
import {AppStyles} from './App.styles.ts';
import Box from './components/Box/Box.tsx';
import {TagsProvider} from './context/TagsContext.tsx';
import LevelPicker from './components/LevelPicker/LevelPicker.tsx';
import ConfirmationOverlay from './components/ConfirmationOverlay/ConfirmationOverlay.tsx';
import Save from './components/Save/Save.tsx';
import Categories from './components/Categories/Categories.tsx';

const App = () => {
  //Modal components could be grouped within single HOC

  return (
    <TagsProvider>
      <LevelPicker>
        <ConfirmationOverlay>
          <ScrollView contentContainerStyle={AppStyles.container}>
            <Box />
            <Categories />
          </ScrollView>
          <Save />
        </ConfirmationOverlay>
      </LevelPicker>
    </TagsProvider>
  );
};

export default App;
