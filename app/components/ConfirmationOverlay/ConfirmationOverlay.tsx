import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {ConfirmationOverlayStyles} from './ConfirmationOverlay.styles.ts';
import {useTags} from '../../context/TagsContext.tsx';

interface ConfirmationOverlayProps {
  children: React.ReactNode;
}

const ConfirmationOverlay = ({children}: ConfirmationOverlayProps) => {
  const {
    confirmationCategoryId,
    setConfirmationCategoryId,
    saveTags,
    setActiveCategoryId,
  } = useTags();

  const handleCategoryChange = () => {
    if (!confirmationCategoryId) {
      return;
    }

    setActiveCategoryId(confirmationCategoryId);
    setConfirmationCategoryId(undefined);
  };

  return (
    <>
      <Modal visible={!!confirmationCategoryId} transparent>
        <View style={ConfirmationOverlayStyles.container}>
          <View style={ConfirmationOverlayStyles.box}>
            <TouchableOpacity
              style={[
                ConfirmationOverlayStyles.button,
                ConfirmationOverlayStyles.buttonCancel,
              ]}
              onPress={handleCategoryChange}
            />
            <TouchableOpacity
              style={[
                ConfirmationOverlayStyles.button,
                ConfirmationOverlayStyles.buttonSave,
              ]}
              onPress={() => {
                saveTags();
                handleCategoryChange();
              }}
            />
          </View>
        </View>
      </Modal>

      {children}
    </>
  );
};

export default ConfirmationOverlay;
