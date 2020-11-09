import { createAction } from '@reduxjs/toolkit';

export const addPostActionCreator = createAction('ADD-POST');
export const updateNewPostTextActionCreator = createAction(
  'UPDATE-NEW-POST-TEXT',
);
export const setUserProfileActionCreator = createAction('SET_USER_PROFILE');
