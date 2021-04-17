const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Masha', pic: 'http://gamesground.ru/uploads/posts/2015-06/1435149262_look.com.ua-62005.jpg' },
    { id: 2, name: 'Vlad', pic: 'https://pbs.twimg.com/media/Bv0wYCPCIAAWO0H.jpg' },
    { id: 3, name: 'Yana', pic: 'https://pbs.twimg.com/media/BK97ExECUAA3qgq.jpg' },
    {
      id: 4,
      name: 'Valeria',
      pic:
        'https://sun9-56.userapi.com/impf/c621725/v621725892/19453/r2io3thlq9Y.jpg?size=259x194&quality=96&proxy=1&sign=ab15701738b3549617c5ea0cab63092b&type=album',
    },
    {
      id: 5,
      name: 'Ariel',
      pic: 'https://bilim-all.kz/uploads/images/2017/04/14/400x276/5141fe1b3e132d32f5a48ff57b870ac6.jpg',
    },
    { id: 6, name: 'Diana', pic: 'http://uzbekiston.site/wp-content/uploads/2017/02/information_items_12475.jpg' },
    {
      id: 7,
      name: 'Alexandr',
      pic:
        'https://sun9-53.userapi.com/impf/c855016/v855016729/22c5dd/KeuCW1AevDM.jpg?size=275x183&quality=96&proxy=1&sign=b1d030e9e2059f05ac90ed57894a7029&type=album',
    },
    {
      id: 8,
      name: 'Vlada',
      pic: 'https://images.chesscomfiles.com/uploads/v1/user/71763418.4153cc93.160x160o.521f97424208@2x.jpeg',
    },
    { id: 9, name: 'Jonh', pic: 'https://web-copywriting.ru/wp-content/uploads/2013/04/most.jpg' },
  ],
  messagesData: [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'Good' },
    { id: 5, message: 'Haha' },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default messagesReducer;
