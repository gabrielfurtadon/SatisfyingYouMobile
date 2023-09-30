import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';


export default function AcoesPesquisa(props) {

  const goToModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa')
  }

  const goToColeta = () => {
    props.navigation.navigate('Coleta', {
      title: props.route.params?.title,
    });
  }

  const goToRelatorio = () => {
    props.navigation.navigate('Relatorio')
  }

  return (
    <View style={styles.container}>
        <View style={styles.squaresContainer}>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Modificar" imageSource={require('../assets/img/modificar.png')} onPress={goToModificarPesquisa}/>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Coletar dados" imageSource={require('../assets/img/coletarDados.png')} onPress={goToColeta}/>
          <DefaultSquareDiv  style={styles.div} textColor="#FFFFFF" text="Relatório" imageSource={require('../assets/img/relatorio.png')} onPress={goToRelatorio}/>
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
