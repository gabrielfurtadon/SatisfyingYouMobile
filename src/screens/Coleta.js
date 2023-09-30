import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Coleta(props) {

  const goToAgradecimentoParticipacao = () => {
    props.navigation.navigate('AgradecimentoParticipacao')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>O que você achou do "title"?</Text>
        <View style={styles.squaresContainer}>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Péssimo" imageSource={require('../assets/img/sentiment_sad.png')} onPress={goToAgradecimentoParticipacao}/>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Ruim" imageSource={require('../assets/img/sentiment_dissatisfied.png')} onPress={goToAgradecimentoParticipacao}/>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Neutro" imageSource={require('../assets/img/sentiment_neutral.png')} onPress={goToAgradecimentoParticipacao}/>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Bom" imageSource={require('../assets/img/sentiment_satisfied.png')} onPress={goToAgradecimentoParticipacao}/>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Excelente" imageSource={require('../assets/img/sentiment_very_satisfied.png')} onPress={goToAgradecimentoParticipacao}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    gap: 20, 
    padding: 10,
    paddingTop: 30,
  },
  squaresContainerIcon: {
    flexDirection: 'column',
    gap: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
  },
  div: {
    backgroundColor: '#372775',
    width: 200,
    height: 200,
    marginLeft: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  }
});
