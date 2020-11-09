import { createReducer } from '@reduxjs/toolkit';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../actions/dialog';

const initialState = {
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What do you do?' },
    { id: 4, message: 'What is your name' },
  ],
  dialogs: [
    { id: 1, name: 'Inna' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Olga' },
    { id: 4, name: 'Ivan' },
  ],
  newMessageBody: '',
};

const dialogReducer = createReducer(initialState, {
  [updateNewMessageBodyActionCreator.type]: (state, action) => ({
    ...state,
    newMessageBody: action.payload,
  }),
  [sendMessageActionCreator.type]: (state) => {
    const message = state.newMessageBody;
    return {
      ...state,
      newMessageBody: '',
      messages: [...state.messages, { id: 6, message }],
    };
  },
});

export default dialogReducer;
