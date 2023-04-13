import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contactSlice';
import { filtersReducer } from './filtersSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// //
const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: tasksReducer,
//     // persistedReducer,
//     filters: filtersReducer,
//   },
// });
console.log(persistedReducer);

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
