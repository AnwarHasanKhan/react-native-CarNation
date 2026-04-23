import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import ReferEarn from '../../screens/ReferEarn/ReferEarn';
import Profile from '../../screens/Profile/Profile';
import { useFocusEffect } from '@react-navigation/native';
import { Colors } from '../../assets/Colors';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Exit App', 'Are you sure you want to exit?', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }, []),
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.appBg,
          height: 70,
          borderTopWidth: 0,
          elevation: 10, // Android shadow
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,

        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                source={require('../../assets/icons/home.png')}
                style={{ width: size, height: size , tintColor: color }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ReferEarn"
        component={ReferEarn}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                source={require('../../assets/icons/retention-bonus.png')}
                style={{ width: size, height: size , tintColor: color }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                source={require('../../assets/icons/user.png')}
                style={{ width: size, height: size , tintColor: color }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
