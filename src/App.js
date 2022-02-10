import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function App() {
const [count, setCount]=useState(0)

const decriment = ()=> {
  setCount(count - 1)
};

const incriment = ()=> {
  setCount(count + 1)
;}
return (
  <div>
    <h1>this is your count: {count}</h1>
    <button onClick={decriment}>-</button>
    <button onClick={incriment}>+</button>
  </div>
)

};

export default App;
