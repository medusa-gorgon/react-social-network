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
          <UserInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
          />
          <PostsContainer profile={props.profile} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
