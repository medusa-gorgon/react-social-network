import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.pic__block}>
        <div className={s.pic} alt='avatar'></div>
      </div>

      <span className={s.post}>{props.message}</span>
      <div className={s.like}>
        <button className={s.likeButton}>&#9825;</button>
        <span className={s.likeCount}>{props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;
