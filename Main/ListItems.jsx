import { useState } from 'react'
import './ListItems.css'

function ViewTracker(props){
   const [val, setVal] = useState(" ");
   const [title, setTitle] = useState("");
   
   const styling = {display:"flex",justifyItems:"center",flexDirection:"row",justifyContent:"space-evenly"};
   console.log("listitems", props.listShow)
   const firstItem = {4: {title: 'Groceries', amt: 45, mode: 'cash'}};
    return(
        <>
        <div className='monthlyHeading' style={styling}>
        <h1>{props.shareTitle}</h1> {/* ListShow - Object holding all input fields*/}
        
        </div>
        <div className='monthlyContent' style={styling}>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Mode</th>
            </tr>
            </thead>
            <tbody>
            
           {Object.keys(props.listShow).map((data,index) => {
                console.log(data,"data",props.shareTitle)
                if(data !== 'August2025'){
                    console.log("yesmatched", props.shareTitle)
                    return Object.values(props.listShow[data]).map((value,index) => {
                    console.log("insidemap",value)

                        // if(value.hasOwnProperty(props.shareDate)){
                        console.log("shouldnotbe", value.title)
                            return(
                                <tr>
                                <td>{value.title}</td>
                                <td>{value.amt}</td>
                                <td>{value.mode}</td>
                                </tr>
                            );
                        // }
                    });
                }
            })}
           
            <tr>
                <td></td>
            </tr>
            </tbody>
        </table>
        
        </div>
        
        </>
    )
}

export default ViewTracker;
