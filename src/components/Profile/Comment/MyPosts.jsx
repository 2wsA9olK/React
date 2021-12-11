import React from 'react';
import  Post from './Post';
//import mps from './MyPosts.module.css'

const MyPosts = () => {
    return ( 
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post likeConst='10'/>
                <Post  likeConst='5'/>
            </div>
        </div> 
    );
}

export default MyPosts;