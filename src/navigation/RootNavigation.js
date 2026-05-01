import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import SignIn from '../screens/SignIn/SignIn';
import BottomNavigator from '../components/BottomTabNavigator/BottomNavigator';
import Subscription from '../screens/Subscription/Subscription';
import PackageScreen from '../screens/PackageScreen/PackageScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import HelpScreen from '../screens/HelpScreen/HelpScreen';
import ServiceAndRepair from '../screens/ServiceAndRepair/ServiceAndRepair';
import AddressScreen from '../screens/AddressScreen/AddressScreen'
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen'
import AddCarScreen from '../screens/AddCarScreen/AddCarScreen'
import UD from '../screens/UnderDevelopment/UD';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="Subscription" component={Subscription} />
          <Stack.Screen name="PackageScreen" component={PackageScreen} />
          <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
          <Stack.Screen name="HelpScreen" component={HelpScreen} />
          <Stack.Screen name="ServiceAndRepair" component={ServiceAndRepair} />
          <Stack.Screen name="AddressScreen" component={AddressScreen} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="AddCarScreen" component={AddCarScreen} />
          <Stack.Screen name="UD" component={UD} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
