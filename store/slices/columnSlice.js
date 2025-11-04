import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getColumns } from '../../services/api';

export const fetchColumns = createAsyncThunk(
  'columns/fetchColumns',
  async (page) => {
    const response = await getColumns(page);
    return response.data;
  }
);

const columnSlice = createSlice({
  name: 'columns',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    page: 1
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColumns.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchColumns.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.length === 0) {
          return;
        }
        state.items = state.page === 1 
          ? action.payload
          : [...state.items, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchColumns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default columnSlice.reducer;