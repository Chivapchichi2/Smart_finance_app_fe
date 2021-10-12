import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { ledgerReducer } from './ledger';
import { userReducer } from './user';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    balance: userReducer,
    ledger: ledgerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
