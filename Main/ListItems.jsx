import { useState } from 'react'
import './ListItems.css'

function ViewTracker(props){

    const styling = {display:"flex",justifyItems:"center",flexDirection:"row",justifyContent:"space-evenly"};
    console.log("listitems", props.listShow, props.shareFilteredMonthItems) // Testing point
function handleChange(){
    props.listShow.map((data) => data.section = false);
}

    return(
        <>
         <div className='monthlyContent' style={styling}>
         <table>
            <thead>
            <tr><td>January2025</td></tr>
            </thead>
         {props.listShow.map((datas) => {
            if(datas.month_year === "January2025"){
                return(
                    <tbody>
                         <tr>
                            <td>{datas.title}</td>
                            <td>{datas.amt}</td>
                            <td>{datas.mode}</td>
                          </tr>
                    </tbody>    
                ) 
            }
        })}  
        </table>    
         </div>
        </>
)
}

export default ViewTracker;
