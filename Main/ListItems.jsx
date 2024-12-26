import { useState } from 'react'

export default function ViewTracker(props){
   const [val, setVal] = useState(" ");
   const [title, setTitle] = useState("");
   function handleClick(){
    // props.onClick(true, false);
    console.log(props.show)
    setVal(props.show[0])
    setTitle(props.show[1])
   }
    return(
        <>
        <h2>{title}</h2>
        <p>{val}</p>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

