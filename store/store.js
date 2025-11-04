import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './slices/mealSlice';
import diaryReducer from './slices/diarySlice';
import columnReducer from './slices/columnSlice';
import achievementReducer from './slices/achievementSlice';
import chartReducer from './slices/chartSlice';
import notificationReducer from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    diaries: diaryReducer,
    columns: columnReducer,
    achievement: achievementReducer,
    chart: chartReducer,
    notifications: notificationReducer,
  },
});