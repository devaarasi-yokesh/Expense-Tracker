import { useState,useRef } from 'react'
import './App.css'
import ViewTracker from './ListItems';
import Input from './addItem';



function App() {
const [add, setAdd] = useState(true);
const [list, setList] = useState(false);
const [inputVals, setInputVals] = useState([]);


function setTransit(val1,val2){
  setAdd(val1);
  setList(val2);
}
  return (
    <>
      <div>
      {add && <Input onClick={setTransit} share={setInputVals}/>}
      {list && <ViewTracker  onClick={setTransit} show={inputVals}/>}
      </div>
    </>
  )
}

export default App;
