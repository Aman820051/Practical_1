import React,{useState} from 'react';
import './App.css';

function App() {

  const [tempValue, setTempValue] = useState(10)
  const [color, setColor] = useState("cold")

  const increment = () =>{
    const newIncre = tempValue +1;

    if(newIncre >= 15)
    {
      setColor('hot')
    }

    setTempValue(newIncre)
  }
  const decrement = () =>{
    const newIncre = tempValue -1;

    if(newIncre < 15)
    {
      setColor('cold')
    }

    setTempValue(newIncre)
  }
  return (
    <div className="App">
        <div className='container'>
          <h2>Temperature App</h2>
          <div className='inner'>
           <div className='inner-box'>
           <h1 className={`text ${color}`}>{tempValue}</h1>
           </div>
            <button onClick={()=>increment()}>Add</button>&nbsp;
            <button onClick={()=>decrement()}>Sub</button>
          </div>
        </div>
    </div>
  );
}

export default App;