import logo from './logo.svg';
import './App.css';
import Question from './components/view/Question';
import { useState } from 'react';
function App() {
  const questions = [{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who created the digital distribution platform Steam?","correct_answer":"Valve","incorrect_answers":["Pixeltail Games","Ubisoft","Electronic Arts"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the main character in The Stanley Parable?","correct_answer":"Stanley","incorrect_answers":["The Adventure Line","The Narrator","The Boss"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the 2002 video game Kingdom Hearts, how many Keyblades are usable?","correct_answer":"18","incorrect_answers":["13","16","15"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which of these is NOT the name of a rival gang in the video game Saints Row 2?","correct_answer":"The Zin Empire","incorrect_answers":["The Brotherhood","The Ronin","The Sons of Samedi"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the creator of the Super Smash Bros. Series?","correct_answer":"Masahiro Sakurai","incorrect_answers":["Reggie Fils-Aim&eacute;","Bill Trinen","Hideo Kojima"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"TF2: What code does Soldier put into the door keypad in Meet the Spy?","correct_answer":"1111","incorrect_answers":["1432","1337","No code"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the Half-Life series, Gordon Freemans signature weapon is a:","correct_answer":"Crowbar","incorrect_answers":["Sledgehammer","Fiber Wire","Katana"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Minecraft, which two items must be combined to craft a torch?","correct_answer":"Stick and Coal","incorrect_answers":["Stick and Fire","Wood and Coal","Wood and Fire"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?","correct_answer":"Donkey Kong","incorrect_answers":["Mario","Kirby","Zelda"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the Metal Gear Solid series, whats the name of Solid Snakes brother?","correct_answer":"Liquid Snake","incorrect_answers":["Kulus Snake","Billy Snake","Gilur Snake"]}]
  const [indexCounter, setIndexCounter] = useState(0);
  const [showScore,setshowScore] = useState(false);
  const [score,setScore] = useState();
  const nextQuestion = () =>{
    const nextQuestion = indexCounter + 1;
    if(nextQuestion < questions.length){
      setIndexCounter(nextQuestion);
    }
    else{
      setshowScore(true);
    }
  }

  const totalScore = (currentScore) =>{
    setScore(currentScore);
  }

  const [updatedScore,setUpdatedScore] = useState(0);
  let updatedScoreFun = (updatedScore) =>
  {
    setUpdatedScore(updatedScore);
  }


  return (
    <div className="App">

    {showScore ? 
    
    (
      <div>
        <h1>You got {updatedScore}</h1>
      </div>
    ) 
    
    : (

      <div>
    
    <h1>Question {indexCounter + 1}</h1>
    <Question questions={questions[indexCounter].question}  />
    {questions[indexCounter].incorrect_answers.map((option,index)=>{
      // {console.log(option)}
      return <Question options={option} />
    })}
    <Question correct_answer={questions[indexCounter].correct_answer} updatedScoreFun= {updatedScoreFun} totalScore={totalScore} />
    <br/> 
    {/* {console.log( '===>' ,indexCounter} */}
    {indexCounter >= questions.length-1 ?
    <button onClick={nextQuestion}>Submit</button>
    :
    <button onClick={nextQuestion}>Next</button>
  }
      
    </div>
  )}
    </div>
  );
}

export default App;
