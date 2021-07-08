import { useState } from "react"
import { adData } from "../../config/firebase";
import firebase from "firebase";
import ShowAdd from "../SubmitAd/Screen"
function SubmitAd (){
    
    const [adTitle, setAdTitle] = useState();
    const [price, setPrice] = useState();
    const [userName, setUserName] = useState();
    const [contactNo, setContactNo] = useState();
    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();
    const [img3, setImg3] = useState();
    const [img4, setImg4] = useState();
    const [img5, setImg5] = useState();
    const [allInfo,setAllInfo] = useState(false);

    const submitAd = () => {
            const db = firebase.firestore();
            db.collection('All-ads').add({
                adTitle: adTitle,
                price: price,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
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
                    <input type="url" placeholder="Enter Image URL" onChange={(e)=>setImg1(e.target.value)}/> 
                    {/* <button onClick={()=>{setMoreImg(["added"])}}>+</button> */}
                        <input placeholder="Enter Image URL" onChange={(e)=>setImg2(e.target.value)}/> 
                       <input placeholder="Enter Image URL" onChange={(e)=>setImg3(e.target.value)}/> 
                       <input placeholder="Enter Image URL" onChange={(e)=>setImg4(e.target.value)}/> 
                       <input placeholder="Enter Image URL" onChange={(e)=>setImg5(e.target.value)}/> 
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