import { useState, useEffect } from 'react'
import { getAllAds } from '../../../config/firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function ShowAdd() {

    const [allAds,setAllAds] = useState([]);

    useEffect(async ()=>{
        const adsData = await getAllAds()
        const tempAds = [];
        adsData.forEach(doc =>{
            // console.log(doc.data())
            const obj = {...doc.data(), id:doc.id}
            // console.log(obj)
            tempAds.push(obj);
        })
        setAllAds(tempAds);
        },[])
console.log(allAds)
    return(
        <div>
            {/* {allAds.map(items =>{
            const {userName,adTitle,contactNo,allImg,price} = items
                return(
                    <div style={{border:"2px solid"}}>
                        <h3>username: {userName}</h3>
                        <h3>adTitle: {adTitle}</h3>
                        <h3>contactNo: {contactNo}</h3>
                        <h3>Price: {[price]}</h3>
                        {allImg.map(items =>{
                            return <img src={items} height="200px" border="2px solid"/>
                        })}
                    </div>
                )
            })} */}
            <h1>Check</h1>
              <Button variant="outline-primary">Primary</Button>
        </div>
    )
}

export default ShowAdd