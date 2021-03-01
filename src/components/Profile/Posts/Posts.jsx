import Submit from './Submit';
import Input from './Input';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
  let postsElements = props.postsData.map((post) => <Post message={post.message} likeCount={post.likeCount} />);
  return (
    <div className={s.posts}>
      <div className={s.posts__title}>
        <h2 className={s.title}>My posts</h2>
      </div>
      <div className={s.form}>
        <Input />
        <div className={s.button__block}>
          <Submit />
        </div>
      </div>
      {postsElements}
    </div>
  );
};
export default Posts;
