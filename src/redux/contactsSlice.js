import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: contactsList,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(10),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        stat => stat.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

export const selectContact = state => state.contacts.contacts;
