// import Submit from './Submit';
// import Textarea from './Textarea';
import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
  let postsElements = props.postsData.map((post) => <Post message={post.message} likeCount={post.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.posts__title}>
        <h2 className={s.title}>My posts</h2>
      </div>
      <div className={s.form}>
        <div className={s.textarea__block}>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostElement}
            className={s.textarea}
            type='textarea'
            placeholder='write what comes to mind...'
          />
        </div>
        <div className={s.button__block}>
          <div onClick={addPost} className={s.button__wrap}>
            <button className={s.button} type='submit'>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className={s.content__block}>{postsElements}</div>
    </div>
  );
};
export default Posts;
