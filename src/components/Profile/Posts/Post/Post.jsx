import s from './Post.module.css';
import userPhoto from '../../../../assets/images/user.png';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.pic__block}>
        <div
          className={s.pic}
          style={{
            backgroundImage: `url(${
              props.profile != null && props.profile.photos.small != null ? props.profile.photos.small : userPhoto
            })`,
          }}
          alt='avatar'
        ></div>
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
