import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAchievement } from '../../services/api';

export const fetchAchievement = createAsyncThunk(
  'achievement/fetchAchievement',
  async () => {
    const response = await getAchievement();
    return response.data;
  }
);

const achievementSlice = createSlice({
  name: 'achievement',
  initialState: {
    data: {
      percentage: 0,
      date: ''
    },
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievement.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAchievement.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAchievement.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default achievementSlice.reducer;