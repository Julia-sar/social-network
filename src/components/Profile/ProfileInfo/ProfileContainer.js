import React, { useEffect } from 'react';
import Profile from '../Profile';
import * as axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfileActionCreator } from '../../../redux/actions/profile';
import { profileSelector } from '../../../redux/selector/profile';

export default function ProfileContainer(props) {
  const userId = props.match.params.userId;
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId || 2}`,
      )
      .then((response) => {
        dispatch(setUserProfileActionCreator(response.data));
      });
    // eslint-disable-next-line
  }, []);

  return <Profile profile={profile} />;
}
