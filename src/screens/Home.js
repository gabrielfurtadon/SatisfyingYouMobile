import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';


export default function Home(props) {

  const goToNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa')
  }

  const goToAcoesPesquisa = (titulo) => {
    props.navigation.navigate('AcoesPesquisa', { titulo });
  }

  return (
    <View style={styles.container}>
      <DefaultInput style={styles.busca} placeholder={'🔍  Insira o termo de busca'} size={350} />
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.squaresContainer}>
          <DefaultSquareDiv  style={styles.div} textColor="#3F92C5" text="SECOMP 2023" data="10/10/2023" imageSource={require('../assets/img/ImagemSquare1.png')} onPress={() => goToAcoesPesquisa('SECOMP 2023')}/>
          <DefaultSquareDiv  style={styles.div} textColor="#3F92C5" text="UBUNTU 2022" data="05/06/2022" imageSource={require('../assets/img/imagemSquare2.png')} onPress={() => goToAcoesPesquisa('UBUNTU 2022')}/>
          <DefaultSquareDiv  style={styles.div} textColor="#3F92C5" text="MENINAS CPU" data="01/04/2022" imageSource={require('../assets/img/imagemSquare3.png')} onPress={() => goToAcoesPesquisa('MENINAS CPU')}/>
        </View>
      </ScrollView>
      <DefaultButton style={styles.botao} title={'Nova Pesquisa'} color={'#37BD6D'} width={350} onPress={goToNovaPesquisa}/>
    </View>
  );
}

const styles = StyleSheet.create({
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
  scrollView: {
    height: 200, 
  },
  squaresContainer: {
    flexDirection: 'row',
    paddingTop: 140
  },
  div: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    marginLeft: 10,    
    alignItems: 'center', 
    justifyContent: 'center',
  },
  botao: {
    marginBottom: 20
  },
  content1: {
    color:'black'
  }

});
