import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';

export default function Coleta(props) {

  const { title } = props.route.params;

  const formattedTitle = title.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });

  const goToAgradecimentoParticipacao = () => {
    props.navigation.navigate('AgradecimentoParticipacao')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você achou do {formattedTitle}?</Text>
      <View style={styles.squaresContainer}>
        <DefaultSquareDiv style={styles.div} textColor="#FFFFFF" text="Péssimo" imageSource={require('../assets/img/sentiment_sad.png')} onPress={goToAgradecimentoParticipacao} />
        <DefaultSquareDiv style={styles.div} textColor="#FFFFFF" text="Ruim" imageSource={require('../assets/img/sentiment_dissatisfied.png')} onPress={goToAgradecimentoParticipacao} />
      </View>
      <View style={styles.squaresContainer}>
        <DefaultSquareDiv style={styles.div} textColor="#FFFFFF" text="Neutro" imageSource={require('../assets/img/sentiment_neutral.png')} onPress={goToAgradecimentoParticipacao} />
        <DefaultSquareDiv style={styles.div} textColor="#FFFFFF" text="Bom" imageSource={require('../assets/img/sentiment_satisfied.png')} onPress={goToAgradecimentoParticipacao} />
      </View>
      <View style={styles.squaresContainer}>
        <DefaultSquareDiv style={styles.div} textColor="#FFFFFF" text="Excelente" imageSource={require('../assets/img/sentiment_very_satisfied.png')} onPress={goToAgradecimentoParticipacao} />
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
  squaresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    paddingTop: 60,
  },
  div: {
    backgroundColor: '#372775',
    width: 150,
    height: 150,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});