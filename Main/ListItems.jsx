import { useState } from 'react'

export default function ViewTracker(props){
   const [val, setVal] = useState(" ");
   const [title, setTitle] = useState("");
   
   const styling = {display:"flex",justifyItems:"center",flexDirection:"row",justifyContent:"space-evenly"}
   
    return(
        <>
        <div>
        <div className='monthlyHeading' style={styling}>
        <h1>{props.listShow[`${props.shareMonth}`].month}</h1>
        <h1>{props.listShow[`${props.shareMonth}`].year}</h1>
        </div>
        <div className='monthlyContent' style={styling}>
        <p>{props.listShow[`${props.shareMonth}`].title}</p>
        <p>{props.listShow[`${props.shareMonth}`].amt}</p>
        </div>
        </div>
        </>
    )
}

