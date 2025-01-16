import { useState,useRef } from 'react'
import './App.css'
import ViewTracker from './ListItems';
import Input from './addItem';
import Header from './Header';
import Footer from './Footer';


function App() {
const [add, setAdd] = useState(true);               // Flag to set the home screen 
const [list, setList] = useState(false);            // Flag to set the listItems screen
const [inputVals, setInputVals] = useState([]);     // Array having title and amount input values
const [incomeVal, setIncomeVal] = useState('0.00'); // Header income value initialized
const [expenseVal, setExpenseVal] = useState('0.00') // Header expense initialized
const [savingVal, setSavingVal] = useState("0.00")  //Header Savings initialized 
const [items,setItems] = useState([]);              // object for holding the set of inputs entered by the user
const[filteredMonthItems, setFilteredMonthItems] = useState([]); 
const [date, setDate] = useState('');               // Specific date - ListItems


// To change between Home / ListItems / Chart tabs
function setTransit(val1,val2){
  setAdd(val1);
  setList(val2);
}


  return (
    <>
      <div>

      <Header showIncome={incomeVal} showExpense={expenseVal} showSaving={savingVal}/>         {/* Header Label */}

      {add && <Input listData={setItems} listObject={items}  changeDate={setDate} onClick={setTransit}   /* adding Items  */
      shareFilteredMonthItems={filteredMonthItems} changeFilteredMonthItems= {setFilteredMonthItems}
      share={setInputVals} prevInc={incomeVal} income={setIncomeVal} prevSav={savingVal} 
      saving={setSavingVal} prevExp={expenseVal} expense={setExpenseVal}/>}

      {list && <ViewTracker   input={inputVals} listShow={items} changeList={setItems} shareDate={date} shareFilteredMonthItems={filteredMonthItems}/>}           {/*/* Listing Items */}

      </div>

       <Footer trans={setTransit}/>                                                            {/* Footer tabs */}
    </>
  )
}

export default App;
