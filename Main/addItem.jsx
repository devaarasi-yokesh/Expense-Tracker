import {useRef, useState} from 'react';
function Input(props){
  
    const [amt, setAmt] = useState(0);
    const [title, setTitle] = useState("");
  const amtref = useRef();
  const titleref = useRef();
  const transref = useRef();
  function handleClick(){
    setAmt(amtref.current.value);
    setTitle(titleref.current.value);
    console.log(amtref.current.value,titleref.current.value)

    props.onClick(false,true);
    props.share([amtref.current.value, titleref.current.value]);
  }
    return( 
    <>
    <span>Amount</span><input type='number' ref={amtref}></input>
    <span>Title</span><input type='text' ref={titleref}></input>
    <span>Transaction</span><input type="text" ref={transref}/>
    <button onClick={handleClick}>Add</button>
    </>
    )
  
  }

  export default Input;