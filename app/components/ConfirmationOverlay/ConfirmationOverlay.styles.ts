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
    backgroundColor: Colors.green,
    borderWidth: 1,
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  bottomBox: {
    marginTop: Values.defaultMargin,
    width: '100%',
    height: 100,
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
