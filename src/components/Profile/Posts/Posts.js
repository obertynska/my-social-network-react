import s from './Posts.module.css'
import Post from "./Post/Post";
import Form from "./Form/Form";


const Posts = ({posts, newPostCurrentMessage, addPost, updateNewPostCurrentMessage, removePost}) => {

     return (
         <div className={s.posts_content}>
             <Form updateNewPostCurrentMessage={updateNewPostCurrentMessage} addNewPost={addPost} newPostCurrentMessage={newPostCurrentMessage} />
             <div className={s.posts_wrapper}>
                 { posts.map(post => <Post key={post.id} id={post.id} postText={post.message} date={post.date} likesCount={post.likes} userName={post.userName} removePost={removePost}/>).reverse() }
             </div>
         </div>

    )
}

export default Posts