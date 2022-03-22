import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    myPostDate: [
        { id: 1, message: 'ыыыы', likeConst: 20 },
        { id: 2, message: 'это какая-то хрень', likeConst: 10 }
    ]
};

test('Length of post should be incremented', () => {
    let action = addPostActionCreator("Slam");

    let newState = profileReducer(state,action);
    
    expect(newState.myPostDate.length).toBe(3);
});
  
test('after deliting length of message should be decrement', () => {
    let action = deletePost(1);
    
    let newState = profileReducer(state, action);
    
    expect(newState.myPostDate.length).toBe(1);
});

test('after deliting length should not be decrement if id is incorect', () => {
    let action = deletePost(1000);
    
    let newState = profileReducer(state, action);
    
    expect(newState.myPostDate.length).toBe(2);
});