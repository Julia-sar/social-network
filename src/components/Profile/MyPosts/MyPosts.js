import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {
  const { posts = [] } = props;
  const postsElements = posts.map((post) => {
    return (
      <Post
        key={post.message}
        message={post.message}
        likesCount={post.likesCount}
      />
    );
  });

  const newPostElement = React.createRef();

  function onAddPost() {
    props.addPost();
  }

  function onPostChange(event) {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <section className={classes.postsBlock}>
      <header>
        <h2>my posts</h2>
      </header>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.post}>{postsElements}</div>
    </section>
  );
}
