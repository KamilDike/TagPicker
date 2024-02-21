import {StyleSheet} from 'react-native';
import {Colors, Values} from '../../styles/styles.ts';

export const TabStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.alabaster,
    width: '100%',
    height: 200,
    marginBottom: Values.defaultMargin,
  },
  inActive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
