import { useEffect, useState } from "react"
import { getAllUsers } from "../../config/firebase";

export default function Dashboad (){
    const [user,setUser] = useState([]);

    useEffect(async ()=>{
    const usersData = await getAllUsers()
    const tempUsers = [];
    usersData.forEach(doc =>{
        // console.log(doc.data())
        const obj = {...doc.data(), id:doc.id}
        // console.log(obj)
        tempUsers.push(obj);
    })
    setUser(tempUsers);
    },[])
    return(
        <div>
            <h1>Dashboad</h1>
            <h3>All Users</h3>
            <table border="1px">
                {user.map(item =>{
                    const{id,email,fullName} = item;
                    return(
                        <tr>
                            <td>{id}</td>
                            <td>{email}</td>
                            <td>{fullName}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}