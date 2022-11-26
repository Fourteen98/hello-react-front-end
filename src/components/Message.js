import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/messages/messageSlice';

function Message() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  const status = useSelector((state) => state.messages.status);
  return (
    <div>
      <h1>Random Messages</h1>
      {status === 'succeeded' && messages.map((message) => <div key={message.id} style={{ color: 'red', padding: '20px' }}>{message.message}</div>)}
      <button type="button" onClick={() => dispatch(getMessages())}>Get Messages</button>
    </div>
  );
}

export default Message;
