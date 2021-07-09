import { useState } from "react"
import { adData } from "../../config/firebase";
import firebase from "firebase";
import ShowAdd from "../SubmitAd/Screen"
function SubmitAd (){
    
    const [adTitle, setAdTitle] = useState();
    const [price, setPrice] = useState();
    const [userName, setUserName] = useState();
    const [contactNo, setContactNo] = useState();
    const [allImg, setAllImg] = useState([]);
    const [imgInput, setImgInput] = useState([]);
    const [allInfo,setAllInfo] = useState(false);

    const submitAd = () => {
            const db = firebase.firestore();
            db.collection('All-ads').add({
                adTitle: adTitle,
                price: price,
                allImg: allImg,
                userName: userName,
                contactNo: contactNo
            }).then(res=>{
                console.log('ad data added',res)
            }).catch(e=>{
                console.log(e.message)
            })
            setAllInfo(true);
    }
    // console.log(moreImg)
    
    return(
        <div style={{width:"50%",margin:"0 auto"}}>
            {
            !allInfo ?
                <fieldset>
                    <legend>Ad Details</legend>
                    <input placeholder="Ad Title" onChange={(e)=>{setAdTitle(e.target.value)}} required/>
                    <br />
                    <input type="number" placeholder="Enter Price"  onChange={(e)=>{setPrice(e.target.value)}} required/>
                    <br />
                    <input type="url" placeholder="Enter Image URL" onChange={(e)=>allImg.push(e.target.value)}/> 
                    {
                        imgInput.length > 3 ?
                        <button disabled>+</button>
                        :
                        <button onClick={()=>{setImgInput([...imgInput,1])}}>+</button>
                    }
                    {imgInput.map((item,index)=>{
                        return (
                            <input type="url" placeholder="Enter Image URL" onChange={(e)=>allImg.push(e.target.value)}/>
                        )  
                    })}
                    <br />
                    <fieldset>
                        <legend>User Details</legend>
                        <input placeholder="Your name"  onChange={(e)=>{setUserName(e.target.value)}}  required="required"/>
                        <br />
                        <input type="number" placeholder="Your contact number" onChange={(e)=>{setContactNo(e.target.value)}} required/>
                    </fieldset>
                    <br />
                    <button onClick={submitAd}>Submit</button>
                </fieldset>
                :
                <ShowAdd />
                }
        </div>
    )
}


export default SubmitAd