import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChartData } from '../../services/api';

export const fetchChartData = createAsyncThunk(
  'chart/fetchChartData',
  async (period) => {
    const response = await getChartData(period);
    return response.data;
  }
);

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: [],
    period: 'month',
    status: 'idle',
    error: null
  },
  reducers: {
    setPeriod: (state, action) => {
      state.period = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPeriod } = chartSlice.actions;
export default chartSlice.reducer;