import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TabStyles} from './Tab.styles.ts';

interface TabProps {
  name: string;
  isActive?: boolean;
  setActive: () => void;
}

const Tab = ({name, isActive, setActive}: TabProps) => {
  return isActive ? (
    <View style={TabStyles.container} />
  ) : (
    <TouchableOpacity
      style={[TabStyles.container, TabStyles.inActive]}
      onPress={setActive}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
