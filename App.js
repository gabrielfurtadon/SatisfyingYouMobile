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
import Drawer from './src/screens/Drawer';

const Stack = createStackNavigator()

function formatText(inputText) {
    const words = inputText.split(' ');
    return words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
}
  
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

                <Stack.Screen name="Drawer" component={Drawer} />
                {/* <Stack.Screen name="Home" component={Home} /> */}


                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
                <Stack.Screen name="Relatorio" component={Relatorio} />               
                <Stack.Screen
                    name="AcoesPesquisa"
                    component={AcoesPesquisa}
                    options={({ route }) => ({
                        title: formatText(route.params?.title) || 'Ações de Pesquisa',
                        // route.params?.title.split(' ').map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word).join(' ')
                        
                    })}
                />
                <Stack.Screen 
                    name="Coleta" 
                    component={Coleta} 
                    options={{ headerShown: false}} 
                />
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao} 
                    options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
