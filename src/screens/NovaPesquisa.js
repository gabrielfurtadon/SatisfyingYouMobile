import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';

export default function NovaPesquisa(props) {

  const goToHome = () => {
    props.navigation.navigate('Drawer')
  }

  return (
    <View style={styles.container}>
      <View style={styles.forms}>
        <DefaultInput secure={true} title={'Nome'} size={350} error={'Preencha no nome da pesquisa'} />
        <DefaultInput secure={true} title={'Data'} size={350} error={'Preencha a data'} />
        <DefaultInput secure={true} placeholder={'Câmera/Galeria de imagens'} title={'Imagem'} size={350} height={70} />
      </View>
      <View style={styles.botao}>
        <DefaultButton   title={'CADASTRAR'} color={'#37BD6D'} width={350} onPress={goToHome}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forms: {
    paddingTop: 30,
    gap: 20
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 1,
    marginBottom: 10,
  },

});
