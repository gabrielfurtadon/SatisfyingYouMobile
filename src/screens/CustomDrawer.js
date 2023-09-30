import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Home" onPress={() => { props.navigation.push('Home') }} />
      <DrawerItem label="Sair" onPress={() => { props.navigation.popToTop() }} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
