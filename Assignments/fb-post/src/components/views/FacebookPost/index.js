import FbImageLibrary from 'react-fb-image-grid'
import './index.css'
import activeStatus from '../../../assets/online-dot.png';
function FacebookPost (props){
    const {postInfo: {createdBy,avatar,description,images,createdAt}} = props
    return(
        <div className="main-div">
            <br/>
            <img src={avatar} className="profile-img"/>
            <h4 id="created-by">&nbsp; &nbsp; {createdBy}</h4>
            <img src={activeStatus} className="dot"/>
            <p id="description">{description}</p>
            <div className="all-images">
            <FbImageLibrary images={images}/>
            </div>
        </div>
    )
}

export default FacebookPost