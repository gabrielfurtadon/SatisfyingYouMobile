import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import NovaConta from './src/screens/NovaConta';
import NovaPesquisa from './src/screens/NovaPesquisa';
import Home from './src/screens/Home';
import RecuperarSenha from './src/screens/RecuperarSenha';
import Relatorio from './src/screens/Relatorio';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Coleta from './src/screens/Coleta';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';

const Stack = createStackNavigator()

const App =  () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Login' 
                screenOptions={
                    { 
                        headerStyle: {
                            backgroundColor: '#2B1D62'
                        }, 
                        headerTintColor: '#573FBA',
                        headerTitleStyle: {
                            fontFamily: 'AveriaLibre-Regular',
                            color: '#FFFFFF'
                        }
                    }
                }
            >
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false}} 
                />
                <Stack.Screen name="NovaConta" component={NovaConta} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />                
                <Stack.Screen
                    name="AcoesPesquisa"
                    component={AcoesPesquisa}
                    options={({ route }) => ({
                        title: route.params?.title || 'Ações de Pesquisa',
                    })}
                />
                <Stack.Screen 
                    name="Coleta" 
                    component={Coleta} 
                    options={{ headerShown: false}} />
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao} 
                    options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;