import React from 'react';
import  Post from './Post';
import mps from './MyPosts.module.css'


const MyPosts = (props) => {

    let myPostsElement =
    props.myPostDate.map (mp => <Post message={mp.message} likeConst={mp.likeConst}/>); 

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }; 
    

    return ( 
        <div>
            MyPosts
            <div className={mps.newPost}>
                <textarea className={mps.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={mps.myPosts}>
                <div className={mps.myPost}>{myPostsElement}</div>
            </div>
        </div> 
    );
}

export default MyPosts;