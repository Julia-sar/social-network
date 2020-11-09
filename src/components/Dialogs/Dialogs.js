import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export default function Dialogs(props) {
  const {
    dialogsPage: { dialogs = [], messages = [], newMessageBody },
    sendMessage,
    updateNewMessageBody,
  } = props;

  const dialogsElements = dialogs.map((dialog) => {
    return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />;
  });

  const messagesElements = messages.map((message) => {
    return <Message key={message.message} message={message.message} />;
  });

  function onSendMessageClick() {
    sendMessage();
  }
  function onNewMessageChange(event) {
    const body = event.target.value;
    updateNewMessageBody(body);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <textarea
          placeholder="Enter your message"
          value={newMessageBody}
          onChange={onNewMessageChange}
        />
        <button type="button" onClick={onSendMessageClick}>
          Send message
        </button>
      </div>
    </div>
  );
}
