// import HeadPicture from './HeadPicture/HeadPicture';
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.profile}>
        {/* <HeadPicture /> */}
        <div className={s.profile__content}>
          <UserInfo />
          <PostsContainer store={props.store} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
