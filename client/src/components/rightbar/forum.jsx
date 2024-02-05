import './forum.css'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"

export default function Forum() {


  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const desc = useRef()
  const [file, setFile] = useState(null)

  const submitHandle = async (e) =>{
    e.preventDefault();
    const newPost ={
      userId: user._id,
      desc: desc.current.value
    }

    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName)
      data.append("file", file)

      newPost.img = fileName;
      try{
        await axios.post("http://localhost:8800/api/upload", data)
      }catch(err){}
    }
    
    try{
     await axios.post("http://localhost:8800/api/posts", newPost)
     window.location.reload()
      
    }catch(err){}


  }

  return (
    <div className='forum'>
      <div className="forumWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' ref={desc} src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
            <input type="text" ref={desc} placeholder={"What is in your mind " +user.username+"?"} className="shareInput" />
        </div>

        <hr className='shareHr'/>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className='shareCancelImg' onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandle}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Video</span>
                    <input style={{display: "none"}} type="file" id="file" accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
                
                <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            
        </form>
      </div>
    </div>
  )
}
