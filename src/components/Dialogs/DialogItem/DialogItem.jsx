import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
  let path = '/messages/' + props.id;
  return (
    // <div>
    <div className={s.item} activeClassName={s.activeLink}>
      {/* + ' ' + s.active*/}
      <div className={s.pic} style={{ backgroundImage: `url(${props.pic})` }}></div>
      <NavLink className={s.link} to={path}>
        {props.name}
      </NavLink>
    </div>
    // </div>
  );
};

export default DialogItem;
