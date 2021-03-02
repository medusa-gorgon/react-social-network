import { NavLink } from 'react-router-dom';
import s from './FriendItem.module.css';

const FriendItem = (props) => {
  let path = `/${props.id}`;
  return (
    // <div className={s.friends}>

    <NavLink to={path} className={s.link}>
      <div className={s.friend}>
        <div className={s.pic} style={{ backgroundImage: `url(${props.pic})` }}></div>
        <div className={s.name} title={props.name}>
          {props.name}
        </div>
      </div>
    </NavLink>

    // </div>
  );
};
export default FriendItem;
