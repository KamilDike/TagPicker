import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {ConfirmationOverlayStyles} from './ConfirmationOverlay.styles.ts';
import {useTags} from '../../context/TagsContext.tsx';

interface ConfirmationOverlayProps {
  children: React.ReactNode;
}

const ConfirmationOverlay = ({children}: ConfirmationOverlayProps) => {
  const {activeCategoryId} = useTags();

  return (
    <>
      <Modal visible={!!false} transparent>
        <View style={ConfirmationOverlayStyles.container}>
          <View style={ConfirmationOverlayStyles.box}>
            <View style={ConfirmationOverlayStyles.bottomBox}>
              <TouchableOpacity
                style={[
                  ConfirmationOverlayStyles.button,
                  ConfirmationOverlayStyles.buttonCancel,
                ]}
              />
              <TouchableOpacity
                style={[
                  ConfirmationOverlayStyles.button,
                  ConfirmationOverlayStyles.buttonSave,
                ]}
              />
            </View>
          </View>
        </View>
      </Modal>

      {children}
    </>
  );
};

export default ConfirmationOverlay;
