// import HeadPicture from './HeadPicture/HeadPicture';
import Posts from './Posts/Posts';
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.profile}>
        {/* <HeadPicture /> */}
        <div className={s.profile__content}>
          <UserInfo />
          <Posts postsData={props.state.postsData} addPost={props.addPost} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
