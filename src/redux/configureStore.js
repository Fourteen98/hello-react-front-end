import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages/messageSlice';

export default configureStore({
  reducer: {
    messages: messagesReducer,
  },
});
