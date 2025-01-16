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
                    
                        {props.listShow.map((data2) => {
                           console.log( data2.month_year,typeof(data2.month_year))
                           if(data2.section){
                               return(
                                <table>
                                <thead>
                                    <tr><td>{data2.month_year}</td></tr>
                                </thead>
                                 <tbody>
                                   <tr>
                                       <td onChange={handleChange}>{data2.title}</td>
                                       <td>{data2.amt}</td>
                                       <td>{data2.mode}</td>
                                   </tr>
                                   <tr>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                               )
                            }
                           
                        })}
                        
                    </div>
        </>
)
}

export default ViewTracker;
