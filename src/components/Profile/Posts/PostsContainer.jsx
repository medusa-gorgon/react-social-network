import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';

// const PostsContainer = (props) => {
// let state = props.store.getState();
// let addPost = () => {
//   props.store.dispatch(addPostActionCreator());
// };

// let onPostChange = (text) => {
//   let action = updateNewPostTextActionCreator(text);
//   props.store.dispatch(action);
// };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <Posts
//             posts={state.profilePage.postsData}
//             newPostText={state.profilePage.newPostText}
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
