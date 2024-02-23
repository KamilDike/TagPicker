import {StyleSheet} from 'react-native';
import {Colors, Values} from '../../styles/styles.ts';

export const ConfirmationOverlayStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 200,
    flexDirection: 'row',
  },
  button: {
    height: '100%',
    flex: 1,
  },
  buttonCancel: {
    backgroundColor: Colors.red,
  },
  buttonSave: {
    backgroundColor: Colors.green,
  },
});
