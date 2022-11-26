/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const getMessages = createAsyncThunk('messages/getMessages', async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload; 
      state.status = 'succeeded'; 
    });
  },
});

export default messagesSlice.reducer;
