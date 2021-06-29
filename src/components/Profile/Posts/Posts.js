import s from './Posts.module.css'
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm/NewPostForm";
import {connect} from "react-redux";
import {addLike, addPost, removeLike, removePost, updateNewPostCurrentMessage} from "../../../redux/profileReducer";



const Posts = ({posts, newPostCurrentMessage, addPost, updateNewPostCurrentMessage, removePost, addLike, removeLike}) => {

    const submitNewPost = (formData) => {
        addPost(formData.new_post)
    }

    return (
        <div className={s.posts_content}>
            <NewPostForm updateNewPostCurrentMessage={updateNewPostCurrentMessage} addNewPost={addPost}
                         newPostCurrentMessage={newPostCurrentMessage} onSubmit={submitNewPost}/>
            <div className={s.posts_wrapper}>
                {posts.map(post => <Post key={post.id} id={post.id} postText={post.message} date={post.date} isLiked={post.isLiked}
                                         likesCount={post.likes} userName={post.userName} addLike={addLike}
                                         removePost={removePost} removeLike={removeLike}/>).reverse()}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts
    }
}

const mapDispatchToProps = {
    addPost,
    removePost,
    addLike,
    removeLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)