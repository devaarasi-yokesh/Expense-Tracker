import { useState,useRef } from 'react'
import './App.css'
import ViewTracker from './ListItems';
import Input from './addItem';
import Header from './Header';
import Footer from './Footer';


function App() {
const [add, setAdd] = useState(true);
const [list, setList] = useState(false);
const [inputVals, setInputVals] = useState('');
const [incomeVal, setIncomeVal] = useState('0.00');
const [expenseVal, setExpenseVal] = useState('0.00')
const [savingVal, setSavingVal] = useState("0.00")

function setTransit(val1,val2){
  setAdd(val1);
  setList(val2);
}
  return (
    <>
      <div>
      <Header showIncome={incomeVal} showExpense={expenseVal} showSaving={savingVal}/>
      {add && <Input onClick={setTransit} share={setInputVals} prevInc={incomeVal} income={setIncomeVal} prevSav={savingVal} saving={setSavingVal} prevExp={expenseVal} expense={setExpenseVal}/>}
      {list && <ViewTracker   input={inputVals}/>}
      </div>
      <Footer trans={setTransit}/>
    </>
  )
}

export default App;
