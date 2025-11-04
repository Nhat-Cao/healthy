import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDiaries } from '../../services/api';

export const fetchDiaries = createAsyncThunk(
  'diaries/fetchDiaries',
  async (page) => {
    const response = await getDiaries(page);
    return response.data;
  }
);

const diarySlice = createSlice({
  name: 'diaries',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    page: 1
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiaries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDiaries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.length === 0) {
          return;
        }
        state.items = state.page === 1 
          ? action.payload
          : [...state.items, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchDiaries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default diarySlice.reducer;