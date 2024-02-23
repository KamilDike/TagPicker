import React, {useState} from 'react';
import {useTags} from '../../context/TagsContext.tsx';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {LevelPickerStyles} from './LevelPicker.styles.ts';
import {Picker} from '@react-native-picker/picker';

interface LevelPickerProps {
  children: React.ReactNode;
}

const LevelPicker = ({children}: LevelPickerProps) => {
  const {
    levelTagAddition,
    clearLevelTagAddition,
    addLevelTag,
    activeCategoryId,
  } = useTags();
  const [level, setLevel] = useState<number>(1);

  const handleQuit = () => {
    clearLevelTagAddition();
    setLevel(1);
  };

  const handleSave = () => {
    if (levelTagAddition && activeCategoryId) {
      addLevelTag(activeCategoryId, {...levelTagAddition, level: level});
    }
    setLevel(1);
  };

  return (
    <>
      <Modal visible={!!levelTagAddition} transparent>
        <View style={LevelPickerStyles.container}>
          <View style={LevelPickerStyles.box}>
            <Text>Select level:</Text>
            <Picker
              selectedValue={level}
              onValueChange={setLevel}
              style={LevelPickerStyles.picker}>
              {[1, 2, 3, 4, 5].map(number => (
                <Picker.Item
                  key={number}
                  label={number.toString()}
                  value={number}
                />
              ))}
            </Picker>
            <View style={LevelPickerStyles.bottomBox}>
              <TouchableOpacity
                style={[
                  LevelPickerStyles.button,
                  LevelPickerStyles.buttonCancel,
                ]}
                onPress={handleQuit}
              />
              <TouchableOpacity
                style={[LevelPickerStyles.button, LevelPickerStyles.buttonSave]}
                onPress={handleSave}
              />
            </View>
          </View>
        </View>
      </Modal>
      {children}
    </>
  );
};

export default LevelPicker;
