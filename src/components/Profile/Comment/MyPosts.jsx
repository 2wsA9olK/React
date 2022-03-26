import React, { PureComponent } from 'react';
import Post from './Post';
import mps from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const MyPosts = React.memo((props) => {

    let myPostsElement = [...props.myPostDate]
        .reverse()
        .map(mp => <Post key={mp.id} message={mp.message} likeConst={mp.likeConst} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div>
            MyPosts
            <div className={mps.newPost}>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={mps.myPosts}>
                <div className={mps.myPost}>{myPostsElement}</div>
            </div>
        </div>
    );
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText"
                validate={[required, maxLength10]} />
            <button>Add Post</button>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);

export default MyPosts;