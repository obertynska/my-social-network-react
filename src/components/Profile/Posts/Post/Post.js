import s from './Post.module.css'

const Post = ({date, postText, likesCount, userName, id, removePost}) => {

    return (
        <div className={s.post_item} >

            <div className={s.post_item_header}>
                <div className={s.userAvatar}>
                    <img src="/ira.png" alt="avatar"/>
                </div>
                <div>
                    <div className={s.userName}>{userName}</div>
                    <div>{date} </div>
                </div>
                <span onClick={()=>removePost(id)} className={s.removeBtn}><img src="/remove.png" alt="remove"/></span>
            </div>
            <div className="post_item_text">{postText} </div>
            <div className={s.likes_block}>
                <div className={s.likesCount}>{likesCount}</div>
                <div className={s.like_new}>Love it!</div>
            </div>

        </div>
    )
}

export default Post