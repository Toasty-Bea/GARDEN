import React from 'react';
import logo from '../assets/image/USED/LOGO/LOGO64.png';
import randomleaves from '../assets/image/USED/LOGO/leave.png';
import { Link } from "react-router-dom";
import { HouseIcon } from '../Helper/SvgIcon';
//import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import { useState } from 'react';
/*onMouseEnter = { handleMouseEnter } onMouseLeave = { handleMouseLeave }*/
/*<Link to="/Contact"> Contact </Link>*/


function Navebar(){
    const [showIcon, setShowIcon] = useState(false);

    const handleMouseEnter = () => {
        setShowIcon(true);
    };

    const handleMouseLeave = () => {
        setShowIcon(false);
    };

    return (
        <div className="navbar">

            <div className="leftside">
                <img src={logo}  />
            </div>
            <div className="Rightside">
                <Link to="/" className="home-link" >
                    {showIcon ? <HouseIcon.Icon1/> : "Home"}
                    
                </Link>

                <Link to="/Menu"> Menu </Link>
                <Link to="/About"> About </Link>
                
                
                {/*<button><ReorderIcon /></button>*/}

            </div>
           
        </div>
    );

}

export default Navebar