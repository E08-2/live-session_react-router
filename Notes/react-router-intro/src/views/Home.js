import React from "react";
import { Link } from "react-router-dom";
import Bart from "../assets/Bart.png";

const Home = () => {
    return (
        <>
            <div>This is the HOME page!</div>

            <div>
                <img src={Bart} alt="Bart Simpson" />
            </div>

            <Link to="/contact">Go to the Contact Page!</Link>
        </>
    );
}

export default Home;