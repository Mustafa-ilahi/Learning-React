import { useState } from "react"
function Question(props) {
    const [input,setInput] = useState();
    const [score,setScore] = useState(0);
    const getValue = (e) =>{
        setInput(e.target.value);
        console.log(e.target.value);
        if(e.target.value === props.correct_answer){
            // alert("Sahi hai")
            setScore(score+1);
            props.updatedScoreFun(score+1);
        }
        else{
            setScore(score+0);
        }
    }
    
    console.log(score)

    console.log(input)
    return(
        <div>
            <h4>{props.questions}</h4> 
            <input type="radio" name="action" value={props.options|| props.correct_answer} onChange={(e) => getValue(e)} onClick={props.totalScore}/> 
            <label value={props.options}>{props.options}</label>
            <label>{props.correct_answer}</label>
        </div>
    )
}

export default Question