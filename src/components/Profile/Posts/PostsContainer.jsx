import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';

const PostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Posts
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
      updateNewPostText={onPostChange}
      addPost={addPost}
    />
  );
};

export default PostsContainer;
