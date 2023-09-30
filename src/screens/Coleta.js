import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function AcoesPesquisa(props) {

  const goToModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa')
  }

  const goToColeta = () => {
    props.navigation.navigate('Coleta')
  }

  const goToRelatorio = () => {
    props.navigation.navigate('Relatorio')
  }

  return (
    <View style={styles.container}>
        <View style={styles.squaresContainer}>
            <Text style={styles.title}>O que você achou do title</Text>
        </View>

        <View style={styles.squaresContainer}>
            <Icon name="home" size={60} color="#000000" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 20, 
  },
  squaresContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  div: {
    backgroundColor: '#312464',
    width: 200,
    height: 200,
    marginLeft: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  }
});
