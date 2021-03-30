const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
      };
    case SET_USERS:
      console.log({ users: [...state.users, ...action.users] });
      console.log({ ...state });
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => {
  console.log(users);
  return { type: SET_USERS, users };
};

export default usersReducer;

// let pics = {
//   pic1: 'http://gamesground.ru/uploads/posts/2015-06/1435149262_look.com.ua-62005.jpg',
//   pic2: 'https://pbs.twimg.com/media/Bv0wYCPCIAAWO0H.jpg',
//   pic3: 'https://pbs.twimg.com/media/BK97ExECUAA3qgq.jpg',
//   pic4:
//     'https://sun9-56.userapi.com/impf/c621725/v621725892/19453/r2io3thlq9Y.jpg?size=259x194&quality=96&proxy=1&sign=ab15701738b3549617c5ea0cab63092b&type=album',
//   pic5: 'https://bilim-all.kz/uploads/images/2017/04/14/400x276/5141fe1b3e132d32f5a48ff57b870ac6.jpg',
//   pic6: 'http://uzbekiston.site/wp-content/uploads/2017/02/information_items_12475.jpg',
//   pic7:
//     'https://sun9-53.userapi.com/impf/c855016/v855016729/22c5dd/KeuCW1AevDM.jpg?size=275x183&quality=96&proxy=1&sign=b1d030e9e2059f05ac90ed57894a7029&type=album',
//   pic8: 'https://images.chesscomfiles.com/uploads/v1/user/71763418.4153cc93.160x160o.521f97424208@2x.jpeg',
//   pic9: 'https://web-copywriting.ru/wp-content/uploads/2013/04/most.jpg',
// };
// if (props.users.length === 0) {
//   props.setUsers([
//     {
//       id: 1,
//       firstName: 'Masha',
//       pic: pics.pic1,
//       followed: true,
//       bio: 'Blah blah blah',
//       location: { city: 'Minsk', country: 'Belarus' },
//     },
//     {
//       id: 2,
//       firstName: 'Vlad',
//       pic: pics.pic2,
//       followed: true,
//       bio: 'Blah blah blah',
//       location: { city: 'Bobruisk', country: 'Belarus' },
//     },
//     {
//       id: 3,
//       firstName: 'Yana',
//       pic: pics.pic3,
//       followed: true,
//       bio: 'Blah blah blah',
//       location: { city: 'Minsk', country: 'Belarus' },
//     },
//     {
//       id: 4,
//       firstName: 'Valeria',
//       pic: pics.pic4,
//       followed: true,
//       bio: 'Blah blah blah',
//       location: { city: 'Barcelona', country: 'Spain' },
//     },
//     {
//       id: 5,
//       firstName: 'Ariel',
//       pic: pics.pic5,
//       followed: false,
//       bio: 'Blah blah blah',
//       location: { city: '', country: 'Mexico' },
//     },
//     {
//       id: 6,
//       firstName: 'Diana',
//       pic: pics.pic6,
//       followed: true,
//       bio: 'Blah blah blah',
//       location: { city: 'Kletsk', country: 'Belarus' },
//     },
//     {
//       id: 7,
//       firstName: 'Alexandr',
//       pic: pics.pic7,
//       followed: false,
//       bio: 'Blah blah blah',
//       location: { city: 'Kletsk', country: 'Belarus' },
//     },
//     {
//       id: 8,
//       firstName: 'Vlada',
//       pic: pics.pic8,
//       followed: false,
//       bio: 'Blah blah blah',
//       location: { city: 'Minsk', country: 'Belarus' },
//     },
//     {
//       id: 9,
//       firstName: 'Jonh',
//       pic: pics.pic9,
//       followed: false,
//       bio: 'Blah blah blah',
//       location: { city: '', country: 'USA' },
//     },
//   ]);
// }
