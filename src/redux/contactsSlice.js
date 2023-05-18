import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    contacts: contactsList,
    filter: '',
  },
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

    setValueFilter(state, action) {
      return (state.filter = action.payload);
    },
  },
});

export const { addContacts, deleteContact, setValueFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContact = state => state.items.contacts;
export const getFilter = state => state.items.filter;

// Notify.warning(`${action.payload} is already in contant`);
