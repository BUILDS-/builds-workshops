import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1 style = {{color: "blue"}}>You have clicked the button {counter} times</h1>
      <Button increaseCounter = {() => setCounter(counter + 1)}/>
    </div>
  );
}

export default App;
