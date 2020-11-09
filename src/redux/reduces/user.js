import { createReducer } from '@reduxjs/toolkit';
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  toggleIsFetchingActionCreator,
  unfollowActionCreator,
} from '../actions/user';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const userReducer = createReducer(initialState, {
  [followActionCreator.type]: (state, action) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === action.payload) {
        return { ...user, followed: true };
      }
      return user;
    }),
  }),
  [unfollowActionCreator.type]: (state, action) => {
    return {
      ...state,
      users: state.users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, followed: false };
        }
        return user;
      }),
    };
  },
  [setUsersActionCreator.type]: (state, action) => {
    return {
      ...state,
      users: action.payload,
    };
  },
  [setCurrentPageActionCreator.type]: (state, action) => {
    return {
      ...state,
      currentPage: action.payload,
    };
  },
  [setTotalUsersCountActionCreator.type]: (state, action) => {
    return {
      ...state,
      totalUsersCount: action.payload,
    };
  },
  [toggleIsFetchingActionCreator.type]: (state, action) => {
    return {
      ...state,
      isFetching: action.payload,
    };
  },
});

export default userReducer;
