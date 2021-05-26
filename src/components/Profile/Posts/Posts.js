import s from './Posts.module.css'
import Post from "./Post/Post";
import Form from "./Form/Form";


const Posts = ({posts, dispatch ,newPostCurrentMessage}) => {


     return (
         <div className={s.posts_content}>
             <Form dispatch={dispatch} newPostCurrentMessage={newPostCurrentMessage}/>
             <div className={s.posts_wrapper}>
                 { posts.map(post => <Post key={post.id} postText={post.message} date={post.date} likesCount={post.likes} userName={post.userName}/>).reverse() }
             </div>
         </div>

    )
}

export default Posts