import classes from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function DialogItem(props) {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </div>
  );
}
