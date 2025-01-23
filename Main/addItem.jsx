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
  

  
  
  
  
  const temp = {};
  
  let temp2 = {}; 
  // Event handler for add button
  function handleClick(){

    // Storing data to the Main object - items
    const typeEl = document.getElementById("typeOfIncome");             // getting type field from DOM
    const dateEl = document.getElementById("dateVal");                 // getting date field from DOM
    let date = new Date(dateEl.value);                                 // Creating date object for the date field
    const exactDate = date.getDate();                                  // Get a specific date      
    const month_year = String(months[date.getMonth()]) + String(date.getFullYear());
    props.changeDate(exactDate);                                       // transferring date to listItems 
    console.log(exactDate,dateEl.value); 
    
    
         
    let key ;
    if(typeEl && dateEl && transref.current.value && titleref.current.value && transref.current.value){
      temp2.month_year = String(months[date.getMonth()]) + String(date.getFullYear());
      // temp2.year = date.getFullYear();
      temp2.date = date.getDate();
      temp2.title = titleref.current.value;
      temp2.amt = amtref.current.value;
      temp2.mode = transref.current.value;
      temp2.section = true;
      function creatingKey(){
        const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const result = `${keys[Math.floor(Math.random() * 25)]}_${temp2.date}`;
        return result;
      }
    
      key = creatingKey();
    
      
      
    console.log(temp2,"it is temp2","key",key,temp)
   
    props.listData([...props.listObject,temp2])
    console.log(props.listObject)                    // Testing point of Main object items
    }
   else{
    alert("Please fill in the required fields")
   }
  
   let final = {};
   let section = "section";
   if(final.hasOwnProperty(temp2.month_year)){
    if(final[month_year].hasOwnProperty(exactDate)){
      final[month_year][exactDate] = {...final[month_year][exactDate],section:true}
      return final
    }
   }
   else{
    final[temp2.month_year] = {};
    final[temp2.month_year][exactDate] = {}
    final[temp2.month_year][exactDate][section] = true;
   }

   console.log(final,"newOne");
   props.setFilteredMonthItems([...props.filteredMonthItems,final]);


    // Filtering data from main object - Creating object of specific month and dates
      // Filtering data and month for the header
    
   
      if(temp.hasOwnProperty(month_year)){
        console.log("First step- If");
             if(!temp[month_year].hasOwnProperty(key)){
              const updatedValue = {};
              updatedValue[key] = {title:titleref.current.value,amt:amtref.current.value,mode:transref.current.value}
              temp = {...temp[month_year][key],...updatedValue}
         }
       
      }
      else if(!temp.hasOwnProperty(month_year)){
        console.log("Second - Else of outside If")
        temp[month_year] = {};
        temp[month_year][key] = {title:titleref.current.value,amt:amtref.current.value,mode:transref.current.value};    
      }
      
    
    
    
    console.log( "this is the temp",temp,props.filteredMonthItems)    // Testing point
  

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
    dateEl.value = "";
    titleref.current.value = "";
    amtref.current.value = "";
    transref.current.value = "";
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
