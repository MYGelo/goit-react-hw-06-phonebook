import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  // { id: 0, text: 'Learn HTML and CSS', completed: true },

  { id: 'id-1', text: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', text: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', text: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', text: 'Annie Copeland', number: '227-91-26' },
];
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, number) {
        return {
          payload: {
            text,
            number,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
