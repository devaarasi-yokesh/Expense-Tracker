import { useState } from "react";
import './Footer.css';
function Footer(props){
    function changeMonthly(){
        props.trans(false,true);
    }

    function changeHome(){
        props.trans(true,false);
    }
    return (
        <>
        <nav className="footers">
            <ul>
                <li onClick={changeHome}>Home</li>
                <li onClick={changeMonthly}>Monthly</li>
                <li>Chart</li>
            </ul>
        </nav>
        </>
    )
}

export default Footer;
