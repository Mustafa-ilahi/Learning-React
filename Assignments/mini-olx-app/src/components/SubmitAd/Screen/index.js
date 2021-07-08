import { useState, useEffect } from 'react'
import SubmitAd from '..';
import { getAllAds } from '../../../config/firebase'

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
            {allAds.map(items =>{
                return(
                    <div style={{border:"2px solid"}}>
                        <h3>username: {items.userName}</h3>
                        <h3>adTitle: {items.adTitle}</h3>
                        <h3>contactNo: {items.contactNo}</h3>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default ShowAdd