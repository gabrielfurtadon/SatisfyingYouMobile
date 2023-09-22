import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';

export default function RecuperarSenha() {
  return (
    <View style={styles.container}>
      <DefaultInput placeholder={'Digite seu email'} title={'E-mail'} size={300} error={"E-mail parece ser inválido"}/>
  
      <DefaultButton title={'Recuperar'} color={'#37BD6D'} width={300}/>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  input: {
    borderWidth: 1,
    borderRadius: 20,
    padding: '2%',
    width: 300,
    color: 'white',
    borderColor: 'white'
  },

  bottomContainer:{
    gap: 10,
    marginTop: 50
  }
});
