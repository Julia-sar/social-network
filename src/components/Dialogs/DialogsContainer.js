import React from 'react';
import Dialogs from './Dialogs';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/actions/dialog';
import { dialogPageSelector } from '../../redux/selector/dialog';

export default function DialogsContainer() {
  const dialogsPage = useSelector(dialogPageSelector);
  const dispatch = useDispatch();

  const updateNewMessageBody = (body) => {
    dispatch(updateNewMessageBodyActionCreator(body));
  };
  const sendMessage = () => {
    dispatch(sendMessageActionCreator());
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      updateNewMessageBody={updateNewMessageBody}
      sendMessage={sendMessage}
    />
  );
}
