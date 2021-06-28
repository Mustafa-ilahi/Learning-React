import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import trashIcon from './assets/trash.png';
import editIcon from './assets/edit.png';
import todoIcon from './assets/todo.png';

function App() {
  
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(-1)
const addItems = () =>{
  const tempList = [...list];
  tempList.push(text);
  setList(tempList);
  setText('');
}

const deleteItems = (index) =>{
  const tempList = [...list];
  tempList.splice(index,1);
  setList(tempList);
}

const editItems = (index) => {
  // console.log(index);
  setText(list[index]);
  setEditMode(true);
  setCurrentEditIndex(index);
}

const updateItems = () =>{
  const tempList = [...list];
  tempList.splice(currentEditIndex,1,text);
  setList(tempList);
  setEditMode(false);
  setCurrentEditIndex(-1);
  setText('')
}
  return (
      <div> 
        <h1 style={{textAlign:'center',color: 'white'}}>Todo App</h1>
        <br/>
        <div className="main-div">
        <img src={todoIcon} className="todo-icon"/>
        <h3>What's The Plan for Today?</h3>
        <div className="all-items">
        <input placeholder="Enter Items" value={text} onChange={(e)=> setText(e.target.value)}/>
        {
          editMode?
          <button onClick={updateItems} className="update-btn">Update</button>
          :
          <button onClick={addItems} className="add-btn">Add Todo</button>
        }
        <table style={{margin:"0 auto"}}>
          {list.map((items,index) =>{
            return <tr className={currentEditIndex === index && 'edit'}>
              <td className="items">{items}</td>
              <td><button onClick={()=> editItems(index)}  className="edit-btn"><img src={editIcon}/></button></td>
              <td><button onClick={()=> deleteItems(index)} className="del-btn"><img src={trashIcon}/></button></td>
            </tr>
          })}
        </table>
          </div>
      </div>
    </div>
  );
}

export default App;
