import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change(state, action) {
      return action.payload;
    },
  },
});

export const { change } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
