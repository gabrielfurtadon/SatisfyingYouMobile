import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { Logo } from '../components/Logo';

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo/>
      <DefaultInput placeholder={'Digite seu email'} title={'E-mail'} size={300}/>
      <DefaultInput secure={true} placeholder={'Digite sua senha'} title={'Senha'} size={300}/>

      <DefaultButton title={'Entrar'} color={'#37BD6D'} style={{width: 300}}/>

      <View style={styles.bottomContainer}>
        <DefaultButton title={'Criar minha conta'} color={'#419ED7'} style={{width: 300}}/>
        <DefaultButton title={'Esqueci minha senha'} color={'#B0CCDE'} style={{width: 300}}/>
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
