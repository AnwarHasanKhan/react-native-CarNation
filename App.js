import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useNotifications} from './src/notifications/useNotifications'

const App = () => {
  useNotifications();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
