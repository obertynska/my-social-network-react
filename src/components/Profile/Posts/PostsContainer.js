import {
    addPost,
    removePost,
    updateNewPostCurrentMessage

} from "../../../redux/profileReducer";
import Posts from "./Posts";

import {connect} from "react-redux";


const mapStateToProps = (state) => {

    let {newPostCurrentMessage, posts} = state.profileData;

    return {
        newPostCurrentMessage,
        posts
    }
}

const mapDispatchToProps = {
        updateNewPostCurrentMessage,
        addPost,
        removePost
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer