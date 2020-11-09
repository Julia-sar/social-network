import { createAction } from '@reduxjs/toolkit';

export const followActionCreator = createAction('FOLLOW');
export const unfollowActionCreator = createAction('UNFOLLOW');
export const setUsersActionCreator = createAction('SET_USERS');
export const setCurrentPageActionCreator = createAction('SET_CURRENT_PAGE');
export const setTotalUsersCountActionCreator = createAction(
  'SET_TOTAL_USERS_COUNT',
);
export const toggleIsFetchingActionCreator = createAction('TOGGLE_IS_FETCHING');
