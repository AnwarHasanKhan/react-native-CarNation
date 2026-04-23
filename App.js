import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
      </SafeAreaProvider>
  )
};

export default App;
