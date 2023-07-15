import React from 'react';
import { Link } from "react-router-dom";
import backgroundImage from '../assets/image/USED/Background/Background.png';
import '../styles/home.css'


const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="headerContainer" >
                <h1> Delicacies of Nature</h1>
                <p> Edible Grasses That You Can Eat </p>
                <Link to="/menu">
                    <button> found out now</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;