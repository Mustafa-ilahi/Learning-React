import { useState } from "react"
import { adData } from "../../config/firebase";
import firebase from "firebase";

function SubmitAd (){
    
    const [adTitle, setAdTitle] = useState();
    const [price, setPrice] = useState();
    const [userName, setUserName] = useState();
    const [contactNo, setContactNo] = useState();
    const [img,setImages] = useState([]);
    const [allImg, setAllImages] = useState([]);
    const [allData, setAllData] = useState({})
    const submitAd = () => {
        setAllData({adTitle: adTitle,
            price: price,
            allImg: allImg,
            userName: userName,
            contactNo: contactNo})
        // addData();
        // adImg();
    }
    console.log(allData)
    // const addData = () => {
    //     const db = firebase.firestore();
    // db.collection('All-ads').add({

    // }).then(res=>{
    //       alert('ad data added',res)
    //   }).catch(e=>{
    //       alert(e.message)
    //   })
    // }

    const adImg = () => {
        const tempImg = [...allImg];
        tempImg.push(img);
        setAllImages(tempImg)
    }
    // console.log("All images URL", allImg)
    
    return(
        <div  style={{width:"50%",margin:"0 auto"}}>
                <fieldset>
                    <legend>Ad Details</legend>
                    <input placeholder="Ad Title" onChange={(e)=>{setAdTitle(e.target.value)}} required/>
                    <br />
                    <input type="number" placeholder="Enter Price"  onChange={(e)=>{setPrice(e.target.value)}} required/>
                    <br />
                    <input placeholder="Enter Image URL" onChange={(e)=>setImages(e.target.value)}/> 
                    {/* <input placeholder="Enter Image URL" onChange={(e)=>getImages(e)}/> 
                    <input placeholder="Enter Image URL" onChange={(e)=>getImages(e)}/> 
                    <input placeholder="Enter Image URL" onChange={(e)=>getImages(e)}/> 
                    <input placeholder="Enter Image URL" onChange={(e)=>getImages(e)}/>  */}
                    {/* <button onClick={adImg}>+</button> */}
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
        </div>
    )
}

export default SubmitAd