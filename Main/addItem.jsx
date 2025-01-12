import {useRef, useState} from 'react';



function Input(props){

  // Styling for the container
  const myStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "space-between",
  }  

  const [amt, setAmt] = useState(0);  // amount input initialized
  
  const amtref = useRef();   // Reference for getting the recent value entered by the user for amount field
  const titleref = useRef();  // title field ref
  const transref = useRef();  // transaction or mode field ref
  const dateref = useRef();   // date field ref


  const [showTitle, setShowTitle] = useState(true);  // flag to show title field 
  const [showMode, setShowMode] = useState(true);    // flag to show mode or transaction field



  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];  // array to be used to get month name
  

  
   
  let temp = {};                // Object to store the input values
  const values = {};
  
  
  // Event handler for add button
  function handleClick(){
    // setAmt(amtref.current.value);
    // setTitle(titleref.current.value);
    const typeEl = document.getElementById("typeOfIncome");  // getting type field from DOM
    const dateEl = document.getElementById("dateVal");      // getting date field from DOM
    let date = new Date(dateEl.value);                      // Creating date object for the date field
   

    
    const keys = `${months[date.getMonth()]}${date.getFullYear()}`;  // Creating a custom key to store the input under particular month and year
    
    const exactDate = date.getDate();                                   // Get a specific date      
    props.changeDate(exactDate);                                       // transferring date to listItems 

    console.log(keys,exactDate,dateEl.value)
    props.changeTitle(keys);                                            // Title of the specific box like January 2025
    
   
   
    temp[keys] = values;
    values[exactDate] = {};
    values[exactDate].title = titleref.current.value;
    values[exactDate].amt = amtref.current.value;
    values[exactDate].type = typeEl.value;
    values[exactDate].mode = transref.current.value;
    
  
   

  
    props.listData(Object.assign({}, props.listObject, temp));            // Total list of keys
    console.log(temp)
    

    if(typeEl.value === "saving"){
      props.saving(Number(props.prevSav) + Number(amtref.current.value));
    }
    else if(typeEl.value === "income"){
      props.income(Number(props.prevInc) + Number(amtref.current.value));
    }
    else{
      props.expense(Number(props.prevExp) + Number(amtref.current.value));
    }
    typeEl.value = "expense";
    setShowTitle(true);
    setShowMode(true);
    props.share([titleref.current.value,amtref.current.value]); // setting the user input values title(Groceries / Food ) and amount
    amtref.current.value = "";
  }

  function changeFields(e){
    if(e.target.value !== "expense"){
      setShowTitle(false);
      setShowMode(false);
    }
    else if(e.target.value === "expense"){
      setShowTitle(true);
      setShowMode(true);
    }
  }
    return( 
    <>
    <div className='container'  style={myStyle}>
    <span>Type</span><select name="" id="typeOfIncome" style={{fontSize:"1.1em"}} onChange={changeFields}>
      <option value="expense">Expenses</option>
      <option value="income">Income</option>
      <option value="saving">Savings</option>
    </select>
    <span>Amount</span><input type='number' ref={amtref}></input>
    <span>Date</span><input type='date' ref={dateref} id='dateVal'></input>
    {showTitle && <><span>Title</span><input type='text' ref={titleref}></input></>}
    {showMode && <><span>Mode</span><input type="text" ref={transref}/></>}
    <button onClick={handleClick}>Add</button>
    </div>
    </>
    )
  
  }

  export default Input;
