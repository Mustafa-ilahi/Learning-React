import FbImageLibrary from 'react-fb-image-grid'
import './index.css'
import activeStatus from '../../../assets/online-dot.png';
import { useState } from 'react';

function FacebookPost (props){
    const {postInfo: {createdBy,avatar,description,images,createdAt}} = props
    const [comment, setComment] = useState('');
    const [text, setText] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState(-1);

    const getValue = (e) => {
        setText(e.target.value)
    }
    const addComment = () => {
        const tempList = [...comment];
        tempList.push(text);
        setComment(tempList);
        setText('');
    }
    // console.log(comment)

    const editComment = (index) => {
        // console.log(index)
        setText(comment[index]);
        setEditMode(true);
        setCurrentEditIndex(index);
    }
    // console.log(text)

    const updateComment = () => {
        const tempList = [...comment];
        tempList.splice(comment,1,text);
        setComment(tempList);
        setEditMode(false);
        setCurrentEditIndex(-1);
        setText('')
    }

    const deleteComment = (index) => {
        const tempList = [...comment];
        tempList.splice(index,1);
        setComment(tempList);
    }
    // console.log("====>",createdAt)
    return(
        <div className="main-div">
            {/* <br/> */}
            <p className="created-at">{createdAt}</p>
            <img src={avatar} className="profile-img"/>
            <h4 id="created-by">&nbsp; &nbsp; {createdBy}</h4>
            <img src={activeStatus} className="dot"/>
            <p id="description">{description}</p>
            <div className="all-images">
            <FbImageLibrary images={images}/>
            <div id="icons">    
                <div id="like-icon">
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" height="50px"/>
                    <span>Like &nbsp; &nbsp;</span>
                </div>
                <div id="comment-icon">
                    <img src="https://viplikes.net/img/catalog_sect_img/new/facebook%20comment%20icon.png" height="30px"/> &nbsp; &nbsp;
                    <span>Comment</span>
                </div>
                <div id="share-icon">
                    <img src="https://purepng.com/public/uploads/large/share-icon-7nl.png" height="30px"/>
                    <span>&nbsp; Share</span>
                </div>
            </div>
            <br /><br />
            <div style={{position: "relative",bottom: "20px"}}>
                <input placeholder="Write a comment..." value={text} onChange={(e)=> {getValue(e)}} id="input-field"/>
                {
                    editMode ? <button onClick={updateComment}>Update</button> 
                    :
                    <button onClick={addComment} className="send-btn">
                        <img src="https://img.icons8.com/material-sharp/24/000000/filled-sent.png"/>
                    </button>
                }
            
            </div>
            </div>
            <div>
                {comment ? 
                    <table style={{margin: "0 auto"}}>
                        {comment.map((items,index)=>{
                            return (
                                <tr key={index}>
                                <h5 className="comment-user">{createdBy}</h5>
                                <img src={avatar} className="comment-img"/> 
                                &nbsp; &nbsp;   
                                {items} 
                                <button className="edit-btn" onClick={()=> editComment(index)}>Edit</button>
                                <button className="del-btn" onClick={() => deleteComment(index) }>Delete</button>
                            </tr>
                        )
                    })}
                    </table>
                :   
                    <></>
                }
            </div>
        </div>
    )
}

export default FacebookPost