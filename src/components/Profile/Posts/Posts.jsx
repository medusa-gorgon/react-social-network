// import Submit from './Submit';
// import Textarea from './Textarea';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = React.memo((props) => {
  //           or
  // class Posts extends PureComponent {
  //   render() {
  //     console.log('RENDER');
  //     console.log(this.props);
  //           or
  // class Posts extends Component {
  //   // shouldComponentUpdate(nextProps, nextState) {
  //   //   return nextProps !== this.props || nextState != this.state;
  //   // }
  //   render() {
  let postsElements = props.posts.map((post) => (
    <Post profile={props.profile} message={post.message} likeCount={post.likeCount} />
  ));

  const addNewPost = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={s.posts}>
      <div className={s.posts__title}>
        <h2 className={s.title}>My posts</h2>
      </div>
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div className={s.content__block}>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div className={s.textarea__block}>
        <Field
          name='newPostBody'
          className={s.textarea}
          component={Textarea}
          placeholder='write what comes to mind...'
          validate={[required, maxLength10]}
        />
      </div>
      <div className={s.button__block}>
        <div className={s.button__wrap}>
          <button className={s.button} type='submit'>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default Posts;
