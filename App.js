import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNotifications } from './src/notifications/useNotifications';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/store';

const App = () => {
  useNotifications();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" />
          <RootNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;