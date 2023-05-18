import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    handleOnChange: {
      reducer(state, action) {
        return `${state.filter + action.payload}`;
      },

      prepare(text) {
        return {
          payload: {
            text,
          },
        };
      },
    },
  },
});

export const { handleOnChange } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
