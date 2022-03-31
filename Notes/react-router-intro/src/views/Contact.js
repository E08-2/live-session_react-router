import React from "react";
import { Link } from "react-router-dom";
import Lisa from "../assets/Lisa.png";

const Contact = () => {
    return (
        <>
        <div>This is the CONTACT page!</div>
    
        <div>
            <img src={Lisa} alt="Lisa Simpson" />
        </div>

        <Link to="/">Go to the Home Page!</Link>    
        </>
    )
}

export default Contact;