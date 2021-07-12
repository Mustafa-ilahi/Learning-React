import {useSelector} from 'react-redux'
function Dashboad(){
    const activeUser= useSelector(state=> state.user)
    console.log("User from Redux to Component***",activeUser)
    return(
        <div>
            <h1>Dashboad here</h1>
            <h3>{activeUser.user.email}</h3>
        </div>
    )
}

export default Dashboad