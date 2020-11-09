import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  toggleIsFetchingActionCreator,
  unfollowActionCreator,
} from '../../redux/actions/user';
import {
  userCurrentPageSelector,
  userIsFetchingSelector,
  userPageSizeSelector,
  usersSelector,
  userTotalUsersCountSelector,
} from '../../redux/selector/user';

export default function UsersContainer() {
  const users = useSelector(usersSelector);
  const pageSize = useSelector(userPageSizeSelector);
  const totalUsersCount = useSelector(userTotalUsersCountSelector);
  const currentPage = useSelector(userCurrentPageSelector);
  const isFetching = useSelector(userIsFetchingSelector);

  const dispatch = useDispatch();

  const getUsersByPage = useCallback(
    (pageNumber) => {
      dispatch(toggleIsFetchingActionCreator(true));
      return axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
        )
        .then((response) => {
          dispatch(setUsersActionCreator(response.data.items));
          return response;
        })
        .finally(() => dispatch(toggleIsFetchingActionCreator(false)));
    },
    [pageSize, dispatch],
  );

  useEffect(() => {
    getUsersByPage(currentPage).then((response) => {
      dispatch(setTotalUsersCountActionCreator(response.data.totalCount));
    });
    // eslint-disable-next-line
  }, []);

  const onPageChangedHandler = useCallback(
    (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
      getUsersByPage(pageNumber).then((response) => {
        dispatch(setTotalUsersCountActionCreator(response.data.totalCount));
      });
    },
    [dispatch, getUsersByPage],
  );

  const followHandler = useCallback(
    (userId) => {
      dispatch(followActionCreator(userId));
    },
    [dispatch],
  );

  const unfollowHandler = useCallback(
    (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    [dispatch],
  );

  return isFetching ? (
    <Preloader />
  ) : (
    <Users
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChangedHandler}
      users={users}
      follow={followHandler}
      unfollow={unfollowHandler}
    />
  );
}
