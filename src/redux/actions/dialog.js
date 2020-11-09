import { createAction } from '@reduxjs/toolkit';

export const sendMessageActionCreator = createAction('SEND-MESSAGE');
export const updateNewMessageBodyActionCreator = createAction(
  'UPDATE-NEW-MESSAGE-BODY',
);
