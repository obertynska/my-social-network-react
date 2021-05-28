import {addPostActionCreator, updateNewPostCurrentMessageActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";


const PostsContainer = ({store}) => {

    let state = store.getState().profileData

    let {newPostCurrentMessage, posts} = state;

    let updateNewPostCurrentMessage = (postMessage) => {
        let action = updateNewPostCurrentMessageActionCreator(postMessage)
        store.dispatch(action)
    }

    let addNewPost = () => {
        let action = addPostActionCreator()
        store.dispatch(action)
    }


    return (
        <Posts updateNewPostCurrentMessage={updateNewPostCurrentMessage} addNewPost={addNewPost}
               newPostCurrentMessage={newPostCurrentMessage} posts={posts}/>
    )
}

export default PostsContainer