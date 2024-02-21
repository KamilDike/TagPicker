import {StyleSheet} from 'react-native';
import {Colors, Values} from '../../styles/styles.ts';

export const TabStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.alabaster,
    width: '100%',
    height: 200,
    marginBottom: Values.defaultMargin,
    flexDirection: 'row',
    gap: 10,
    padding: Values.defaultPadding,
    flexWrap: 'wrap',
  },
  inActive: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
});
