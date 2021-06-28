import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Post from './components/Post'

const posts = [{userId: 1, id:1,body:"first post ki body", title:"first post ka title"},{userId: 2, id:2,body:"second post ki body", title:"second post ka title"}]
function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPost(res))
  }, [])

  const deleteItem = (index) => {
    const tempList = [...post];
    // console.log("===>" + index)
    tempList.splice(index,1);
    setPost(tempList);
  }

  const editItem = (index) => {
    const title = prompt("Enter New Title");
    const body = prompt("Enter New Body");
    const tempList = [...post];
    tempList[index].title = title;
    tempList[index].body = body;
    setPost(tempList);
  }

  return (
    <div className="App">
        {post.map((item,index)=>{
        return (
          <div>
          <Post items={item} index={index} deleteItem={deleteItem} editItem={editItem}/>
          </div>
          )
        })}

    </div>
  );
}

export default App;
