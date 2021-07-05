import { useState } from "react"

function SubmitAd (){
    const [adTitle, setAdTitle] = useState();
    const [price, setPrice] = useState();
    const [adImg, setAdImg] = useState();
    const [userName, setUserName] = useState();
    const [contactNo, setContactNo] = useState();

    const submitAd = () =>{
        const obj = {
            adTitle,price,userName,contactNo,adImg
        }
        console.log(obj)
    }
    return(
        <div  style={{width:"50%",margin:"0 auto"}}>
            {/* <form> */}
                {/* <fieldset> */}
                    <legend>Ad Details</legend>
                    <input placeholder="Ad Title" onChange={(e)=>{setAdTitle(e.target.value)}}/>
                    <br />
                    <input type="number" placeholder="Enter Price"  onChange={(e)=>{setPrice(e.target.value)}}/>
                    <br />
                    <input type="file" onChange={(e)=>{setAdImg(e.target.value)}}/>
                <br />
                    {/* <fieldset> */}
                        <legend>User Details</legend>
                        <input placeholder="Your name"  onChange={(e)=>{setUserName(e.target.value)}}/>
                        <br />
                        <input type="number" placeholder="Your contact number" onChange={(e)=>{setContactNo(e.target.value)}}/>
                    {/* </fieldset> */}
                    <br />
                    <button onClick={submitAd}>Submit</button>
                {/* </fieldset> */}
            {/* </form> */}
        </div>
    )
}

export default SubmitAd