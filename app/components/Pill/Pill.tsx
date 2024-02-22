import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Tag} from '../../interfaces/Tag.ts';
import {PillStyles} from './Pill.styles.ts';

interface PillProps {
  tag: Tag;
  isActive: boolean;
  onPress: () => void;
}

const Pill = ({tag, isActive, onPress}: PillProps) => {
  return (
    <TouchableOpacity
      style={[PillStyles.container, isActive && PillStyles.active]}
      onPress={onPress}>
      <Text>{tag.name}</Text>
    </TouchableOpacity>
  );
};

export default Pill;
