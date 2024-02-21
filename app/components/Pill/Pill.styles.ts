import {StyleSheet} from 'react-native';
import {Colors, Values} from '../../styles/styles.ts';

export const PillStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Values.defaultPadding,
    backgroundColor: Colors.flashWhite,
    height: 50,
  },
});
