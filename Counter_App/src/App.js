import React,{useState} from "react";
import './App.css'

function App(){
  const [count,setCount] = useState(0);
  const [step,setStep] = useState(1);

  const increment=()=>{
    setCount(count+step);
  }

  const decrement=()=>{
    setCount(count-step);
  }

  const reset=()=>{
    setCount(0);
  }

  return(
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter-box">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>  
      <div className="step-box">
        <label>step size:</label>
        <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
      </div>
    </div>
  )
}
export default App;