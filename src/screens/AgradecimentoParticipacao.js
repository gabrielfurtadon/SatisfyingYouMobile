import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function AgradecimentoParticipacao(props) {

  return (
    <View style={styles.container}>
        
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
