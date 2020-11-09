import React, { useCallback } from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

export default function User(props) {
  const {
    user: { photos, id, followed, name, status },
    follow,
    unfollow,
  } = props;

  const to = `/profile/${id}`;
  const avatarSrc = photos.small != null ? photos.small : userPhoto;

  const unfollowHandler = useCallback(() => unfollow(id), [unfollow, id]);
  const followHandler = useCallback(() => follow(id), [follow, id]);

  return (
    <div>
      <span>
        <div>
          <NavLink to={to}>
            <img
              alt="Аватарка пользователь"
              src={avatarSrc}
              className={classes.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button onClick={unfollowHandler}>Unfollow</button>
          ) : (
            <button onClick={followHandler}>Follow</button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{name}</div>
          <div>{status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  );
}
