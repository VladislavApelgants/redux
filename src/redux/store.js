import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filteredSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
