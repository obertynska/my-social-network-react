import {
    addPostActionCreator,
    updateNewPostCurrentMessageActionCreator,
    removePostActionCreator
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostCurrentMessage: (postMessage) => {
            let action = updateNewPostCurrentMessageActionCreator(postMessage)
            dispatch(action)
        },
        addNewPost: () => {
            let action = addPostActionCreator()
            dispatch(action)
        },
        removePost: (removedId) => {

            let action = removePostActionCreator(removedId)
            dispatch(action)
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer