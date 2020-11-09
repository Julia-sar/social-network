import React, { useCallback } from 'react';
import MyPosts from './MyPosts';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/actions/profile';
import {
  newPostTextSelector,
  postsSelector,
} from '../../../redux/selector/profile';

export default function MyPostsContainer() {
  const posts = useSelector(postsSelector);
  const newPostText = useSelector(newPostTextSelector);

  const dispatch = useDispatch();

  const addPost = useCallback(() => {
    dispatch(addPostActionCreator());
  }, [dispatch]);

  const updateNewPostText = useCallback(
    (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    [dispatch],
  );

  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
}
