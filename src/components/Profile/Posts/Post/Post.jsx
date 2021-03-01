import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.pic} alt='avatar'></div>
      <span className={s.post}>{props.message}</span>
      <div className={s.like}>Like {props.likeCount}</div>
    </div>
  );
};
export default Post;
