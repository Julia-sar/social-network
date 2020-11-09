import classes from '../Dialogs.module.css';
import React from 'react';

export default function Message(props) {
  return <div className={classes.message}>{props.message}</div>;
}
