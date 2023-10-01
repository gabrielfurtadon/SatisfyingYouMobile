import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Home from "./Home";
import { Icon } from 'react-native-vector-icons/FontAwesome';

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            screenOptions={{
                drawerLabelStyle:{ color: 'white'},
                drawerStyle: {
                    backgroundColor: '#2B1F5C'
                },
                headerStyle: {
                    backgroundColor: '#2B1D62'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'AveriaLibre-Regular',
                    color: '#FFFFFF'
                }
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <DrawerNavigator.Screen 
                name="Home" 
                component={Home} 
                />
        </DrawerNavigator.Navigator>
    )
}
export default Drawer