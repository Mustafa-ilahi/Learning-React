import FbImageLibrary from 'react-fb-image-grid'
import './index.css'
import activeStatus from '../../../assets/online-dot.png';
import { useState } from 'react';

function FacebookPost (props){
    const {postInfo: {createdBy,avatar,description,images,createdAt}} = props
    const [comment, setComment] = useState('');
    const [text, setText] = useState([]);
    const getValue = (e) => {
        setText(e.target.value)
    }
    const addComment = () => {
        const tempList = [...comment];
        tempList.push(text);
        setComment(tempList);
        setText('');
    }
    console.log(comment)
    return(
        <div className="main-div">
            <br/>
            <img src={avatar} className="profile-img"/>
            <h4 id="created-by">&nbsp; &nbsp; {createdBy}</h4>
            <img src={activeStatus} className="dot"/>
            <p id="description">{description}</p>
            <div className="all-images">
            <FbImageLibrary images={images}/>
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
            <br /><br />
            <div>
                <input placeholder="Write a comment..." value={text} onChange={(e)=> {getValue(e)}}/>
                <button onClick={addComment}>
                    <img src="https://img.icons8.com/material-sharp/24/000000/filled-sent.png"/>
                </button>
            
            </div>
            </div>
            <div>
                {comment ? 
                    <table style={{margin: "0 auto"}}>
                        {comment.map(items=>{
                            return <tr>{items}
                            <button>Edit</button>
                            <button>Delete</button>
                            </tr>
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