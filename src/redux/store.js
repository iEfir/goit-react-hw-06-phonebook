import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
// import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactReducer } from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filtersReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
