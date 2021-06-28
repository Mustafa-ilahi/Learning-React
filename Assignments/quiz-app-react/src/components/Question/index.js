import { useEffect, useState } from "react";
function Question (props){
    const [allOption,setAllOptions] = useState([]);
    const {data: {incorrect_answers,correct_answer,question},currentQuestion, updateCurrentOption} = props;
        
    useEffect(()=>{
        incorrect_answers.push(correct_answer);
        setAllOptions(shuffle(incorrect_answers))
    },[currentQuestion])
    
    return(
        <div>
            <h3>{currentQuestion}){question}</h3>
            {allOption.map(item =>{
                return <div>
                <input type="radio" name="option" key={item} value={item} onChange={(e)=> updateCurrentOption(e.target.value)}/>{item}
                </div>
            })}
        </div>
    )
}

export default Question

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}