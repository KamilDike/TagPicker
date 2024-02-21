import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Tag} from '../../interfaces/Tag.ts';
import {PillStyles} from './Pill.styles.ts';

interface PillProps {
  tag: Tag;
}

const Pill = ({tag}: PillProps) => {
  return (
    <TouchableOpacity style={PillStyles.container}>
      <Text>{tag.name}</Text>
    </TouchableOpacity>
  );
};

export default Pill;
