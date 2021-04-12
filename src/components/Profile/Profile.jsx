// import HeadPicture from './HeadPicture/HeadPicture';
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import { Redirect } from 'react-router';

const Profile = (props) => {
  if (!props.isAuth) return <Redirect to={'/login'} />;
  return (
    <div className={s.content}>
      <div className={s.profile}>
        {/* <HeadPicture /> */}
        <div className={s.profile__content}>
          <UserInfo profile={props.profile} />
          <PostsContainer profile={props.profile} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
