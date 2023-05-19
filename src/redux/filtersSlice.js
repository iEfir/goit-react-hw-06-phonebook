import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      console.log('action:', action.payload);
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectFilter = state => state.filter;
