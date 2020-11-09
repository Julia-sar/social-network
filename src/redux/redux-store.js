import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './reduces/profile';
import dialogReducer from './reduces/dialog';
import userReducer from './reduces/user';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: userReducer,
});

export const store = configureStore({
  reducer: reducers,
  preloadedState: {},
});

export default store;
