import { createSlice } from '@reduxjs/toolkit';

// const filtersInitialState = {
//   status: '',
// };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    change(state, action) {
      return (state = action.payload);
      // state.status = action.payload;
    },
    // setStatusFilter(state, action) {
    //   state.status = action.payload;
    // },
  },
});

export const { change } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;