import React from 'react';
//import cm  from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            {props.message}  
            <span> Like:</span> {props.likeConst}
            
        </div>        
    );
}

export default Post;