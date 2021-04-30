import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
let state = {
  postsData: [
    { id: 1, message: 'My first post', likeCount: 103 },
    { id: 2, message: 'Second post lol', likeCount: 50 },
    { id: 3, message: 'How are you?', likeCount: 0 },
    { id: 4, message: 'Another post', likeCount: 2 },
  ],
};

test('after deleting length of messages should decrease', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});

test('after deleting length should not decrease if id is incorrect', () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(4);
});

test('length of posts should be incremented', () => {
  let action = addPostActionCreator('text lkjhgf');

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(5);
});

test('post message should be correct', () => {
  let action = addPostActionCreator('text lkjhgf');

  let newState = profileReducer(state, action);

  expect(newState.postsData[4].message).toBe('text lkjhgf');
});
