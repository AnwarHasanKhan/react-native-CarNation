// import { configureStore } from '@reduxjs/toolkit';
// import carReducer from '../slice/carSlice';
// import addressReducer from '../slice/addressSlice';
// import userReducer from '../slice/userSlice';

// export const store = configureStore({
//   reducer: {
//     carlist: carReducer,
//     address: addressReducer,
//     userinfo: userReducer
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

import carReducer from '../slice/carSlice';
import addressReducer from '../slice/addressSlice';
import userReducer from '../slice/userSlice';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['carlist', 'address', 'userinfo'], 
};


const rootReducer = combineReducers({
  carlist: carReducer,
  address: addressReducer,
  userinfo: userReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);