import {useRef, useState} from 'react';



function Input(props){

  // Styling for the container
  const myStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "space-between",
  }  

 
  
  const amtref = useRef();   // Reference for getting the recent value entered by the user for amount field
  const titleref = useRef();  // title field ref
  const transref = useRef();  // transaction or mode field ref
  const dateref = useRef();   // date field ref


  const [showTitle, setShowTitle] = useState(true);  // flag to show title field 
  const [showMode, setShowMode] = useState(true);    // flag to show mode or transaction field



  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];  // array to be used to get month name
  

  
  
  
  

  // Event handler for add button
  function handleClick(){

    // Storing data to the Main object - items
    const typeEl = document.getElementById("typeOfIncome");             // getting type field from DOM
    const dateEl = document.getElementById("dateVal");                 // getting date field from DOM
    let date = new Date(dateEl.value);                                 // Creating date object for the date field
    const exactDate = date.getDate();                                  // Get a specific date      
    props.changeDate(exactDate);                                       // transferring date to listItems 
    console.log(exactDate,dateEl.value);                               // Testing point for checking date 
                                             
    let temp2 = {};      
    temp2.month_year = String(months[date.getMonth()]) + String(date.getFullYear());
    // temp2.year = date.getFullYear();
    // temp2.date = date.getDate();
    temp2.title = titleref.current.value;
    temp2.amt = amtref.current.value;
    temp2.mode = transref.current.value;
    temp2.section = true;
  
    console.log(temp2,"it is temp2")
   
    props.listData([...props.listObject,temp2])
    console.log(props.listObject)                    // Testing point of Main object items
  


    // Filtering data from main object - Creating object of specific month and dates
    let temp = [...new Set((props.listObject.map((data) => String(data.month_year) )))];  // Filtering data and month for the header
    props.changeFilteredMonthItems([...props.shareFilteredMonthItems,temp]);
    console.log(temp, "this is the temp",props.shareFilteredMonthItems)    // Testing point
  

    // to hide the mode option
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


  // Checking the type - Flag point to the mode and title to show or don't show
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
