import React from 'react';
import  Post from './Post';
//import mps from './MyPosts.module.css'

const MyPosts = (props) => {

    let myPostsElement =
    props.myPostData.map (mp => <Post message={mp.message} likeConst={mp.likeConst}/>); 

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text); 
    }; 

    return ( 
        <div>
            MyPosts
            <div>
                <textarea  onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {myPostsElement}
            </div>
        </div> 
    );
}

export default MyPosts;