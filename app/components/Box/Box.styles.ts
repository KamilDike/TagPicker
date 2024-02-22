import {StyleSheet} from 'react-native';
import {Colors, Values} from '../../styles/styles.ts';

export const BoxStyles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: Colors.flashWhite,
    marginBottom: Values.defaultMargin,
    flexDirection: 'row',
    padding: Values.defaultPadding,
    gap: Values.defaultPadding,
    flexWrap: 'wrap',
  },
});
