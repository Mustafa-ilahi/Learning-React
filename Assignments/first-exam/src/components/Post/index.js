function Post(props) {
const {items: {id,title,body},index} = props;
    return(
        <div>
            <div style={{border:"2px solid black"}}>
            <ul style={{display:"inline"}}>
                <li><h2>({id})</h2></li>
                <li><h3>Title</h3> {title}</li>
                <li><h3>Body</h3> {body}</li>
                <br/>
                <button onClick={()=> props.editItem(index)}>Edit</button>
                <button onClick={()=>props.deleteItem(index)}>Delete</button>
                <br /><br/>
            </ul>
            </div>
        </div>
    )
}

export default Post