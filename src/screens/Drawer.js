import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Home from "./Home";

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <DrawerNavigator.Screen name="Home" component={Home} />
        </DrawerNavigator.Navigator>
    )
}
export default Drawer