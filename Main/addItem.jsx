import {useRef, useState} from 'react';



function Input(props){
  const myStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "space-between",
  }  
  const [amt, setAmt] = useState(0);
  const [title, setTitle] = useState("");
  const amtref = useRef();
  const titleref = useRef();
  const transref = useRef();
  const dateref = useRef();

  const [showTitle, setShowTitle] = useState(true);
  const [showMode, setShowMode] = useState(true);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  function handleClick(){
    // setAmt(amtref.current.value);
    // setTitle(titleref.current.value);
    const typeEl = document.getElementById("typeOfIncome");
    const dateEl = document.getElementById("dateVal");
    let date = new Date(dateEl.value);


    let temp = {};
    const keys = `${months[date.getMonth()]}${date.getFullYear()}`;
    props.changeMonth(keys);
    temp[`${keys}`] = {};
    temp[`${keys}`].month = months[date.getMonth()];
    temp[`${keys}`].year = date.getFullYear();
    temp[`${keys}`].title = titleref.current.value;
    temp[`${keys}`].amt = amtref.current.value;
    temp[`${keys}`].type = typeEl.value;
    temp[`${keys}`].mode = transref.current.value;
    props.listData(temp);
    temp = {};
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
    props.share([titleref.current.value,amtref.current.value]);
    amtref.current.value = "";
  }

  function changeFields(e){
    if(e.target.value === "income" || "saving"){
      setShowTitle(false);
      setShowMode(false);
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
