import { createReducer } from '@reduxjs/toolkit';
import {
  addPostActionCreator,
  setUserProfileActionCreator,
  updateNewPostTextActionCreator,
} from '../actions/profile';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 54 },
    { id: 2, message: "It's my first application", likesCount: 104 },
    { id: 3, message: 'And you?', likesCount: 12 },
    { id: 4, message: 'Good bye', likesCount: 9888 },
  ],
  newPostText: 'it-application',
  profile: null,
};

const profileReducer = createReducer(initialState, {
  [addPostActionCreator.type]: (state) => {
    const newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0,
    };

    return {
      ...state,
      newPostText: '',
      posts: [...state.posts, newPost],
    };
  },

  [updateNewPostTextActionCreator.type]: (state, action) => {
    return {
      ...state,
      newPostText: action.payload,
    };
  },
  [setUserProfileActionCreator.type]: (state, action) => {
    return {
      ...state,
      profile: action.payload,
    };
  },
});
export default profileReducer;
