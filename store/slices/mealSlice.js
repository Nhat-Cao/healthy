import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMeals } from '../../services/api';

export const fetchMeals = createAsyncThunk(
  'meals/fetchMeals',
  async (page) => {
    const response = await getMeals(page);
    return response.data;
  }
);

const mealSlice = createSlice({
  name: 'meals',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    page: 1
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.length === 0) {
          return;
        }
        state.items = state.page === 1 
          ? action.payload
          : [...state.items, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default mealSlice.reducer;