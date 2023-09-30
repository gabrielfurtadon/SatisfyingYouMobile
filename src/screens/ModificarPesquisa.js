import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import DeleteModal from '../components/DeleteModal';

export default function NovaPesquisa(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const goToHome = () => {
    props.navigation.navigate('Pagina Principal')
  }

  const handleDeletePress = () => {
    setModalVisible(true);
  }

  const handleDeleteConfirm = () => {
    setModalVisible(false);
  }

  const handleModalClose = () => {
    setModalVisible(false);
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.forms}>
      <DefaultInput title={'Nome'} size={350}/>
          <DefaultInput title={'Data'} size={350}></DefaultInput>
          <DefaultInput placeholder={'Câmera/Galeria de imagens'} title={'Imagem'} size={350} height={70} />
      </View>
      <TouchableOpacity onPress={handleDeletePress}>
        <View>
          <Image source={require('../assets/img/lixeria.png')} style={styles.trashIcon} />
          <Text style={styles.apagarText}>Apagar</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.botao}>
        <DefaultButton title={'SALVAR'} color={'#37BD6D'} width={350} onPress={goToHome} />
      </View>


      <DeleteModal visible={modalVisible} onDelete={handleDeleteConfirm} onClose={handleModalClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  forms: {
    paddingTop: 30
  },
  busca: {
    paddingLeft: 100,
  },
  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  botao: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  content1: {
    color: 'black'
  },
  apagarText: {
    fontSize: 16,
    color: 'white',
  },


});
