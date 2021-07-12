function reducer(state={},action){
    console.log("user from reducer***",action)
 switch(action.type){
     case "ADD_USER": {
        return {...state,user:action.data}
     }
     case "REMOVE_USER": {
        return {...state,user:null}
    }
    default:{
        return state
    }
 }   
}

export default reducer