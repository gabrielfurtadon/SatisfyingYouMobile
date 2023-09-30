import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function DeleteModal({ visible, onClose, onDelete }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Tem certeza que deseja apagar essa pesquisa?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.deleteButton}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
                <Text style={styles.cancelButton}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

  },

  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },

  modalContent: {
    backgroundColor: '#372775',
    padding: 20,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },

  deleteButton: {
    color: 'white',
    backgroundColor: '#FF8383',
    width: 120,
    height: 50,
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  cancelButton: {
    color: 'white',
    backgroundColor: '#3F92C5',
    width: 120,
    height: 50,
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});