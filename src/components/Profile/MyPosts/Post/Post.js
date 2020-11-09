import React from 'react';
import classes from './Post.module.css';

export default function Post({ likesCount, message }) {
  return (
    <p className={classes.item}>
      <img
        alt="Аватар"
        src="https://wallpapermemory.com/uploads/576/avatar-background-hd-1080p-73280.jpg"
      />
      {message}
      <div>
        <span>{likesCount} likes </span>
      </div>
    </p>
  );
}
