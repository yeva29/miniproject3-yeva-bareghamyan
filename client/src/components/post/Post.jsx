import { Close, EmojiEmotions, EmojiEmotionsOutlined, LocalActivity, MoreVert, PermMedia } from '@mui/icons-material'
import './post.css'
import { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './comments.css'
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const [isLoading,setLoad]=useState(true);
  const dataFetchedRef = useRef(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext)

  useEffect(() =>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id,post])
  
  const likeHandler = () =>{

    try{
      axios.put("/posts/"+ post._id+"/like", {userId:currentUser._id})
    }catch(err){
      console.log(err)
    }

    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }



  useEffect(()=>{
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const fetchUsers = async () =>{
      const res = await axios.get(`/users?userId=${post.userId}`);
      setLoad(false);
      setUser(res.data)

    }

    fetchUsers()
  },[post.userId])

  if (isLoading===true){
    return <div>This is loading..</div>
  }
  else{
    return (
      <div className='post'>  
        <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                  <img className='postProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                  </Link>
  
                  <span className="postUsername">
                    {user.username}
                  </span>
                  <span className="postDate">{format(post.createdAt)}</span>
              </div>

              <div className="postTopRight">
              <Close className='delate'/>
              </div>
          </div>

          <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className='postImg' src={PF+post.img} alt="" />
          </div>
          
          <div className="postBottom">
              <div className="postBottomLeft">
                  {/* <img className='likeIcon' src={`${PF}like.png`} onClick={likeHandler} alt="" /> */}
                  <img className='likeIcon' src={`${PF}heart.png`}  onClick={likeHandler} alt="" />
                  <span className="postLikeCouter">{like} people liked it</span>
              </div>
              <div className="postBottomRight">
                  <span className="postCommentText">{post.comment} Comments</span>
              </div>
          </div>
          
          <img className='postProfileImg_2' src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" />
          <div className="comment_icon" >
          <input type="text" placeholder='Type a comment' className='coment_input' />
          

               <EmojiEmotionsOutlined className='posi1'/>
               <PhotoLibraryIcon className='posi2'/>
               <SendIcon className='posi3'/>
          
            </div>
      <div className="commentShare">
        <div className='comment_share'>
          <div className='commentTop'>
          <div className="commentTopLeft">
                <Link to={`profile/${user.username}`}>
                  <img className='commentProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                  </Link>
                  <span className="commentUsername">
                    {user.username}
                  </span>
                  <span className='commentDate'>16 minute ago</span>
              </div>
              <div className='commentCenter'>
                <span className='commentText'>comment text</span>
                <ReplyIcon className='reply'/>
              </div>
          </div>
        </div>
        </div>
        <div className='replyShare'>
        <div className='comment_share'>
          <div className='commentTop'>
          <div className="commentTopLeft">
                <Link to={`profile/${user.username}`}>
                  <img className='commentProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                  </Link>
                  <span className="commentUsername">
                    {user.username}
                  </span>
                  <span className='replyDate'>16 minute ago</span>
              </div>
              <div className='commentCenter'>
                <span className='commentText'>reply text</span>
              </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    )

  }



  
}
