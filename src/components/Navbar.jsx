import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExplorerIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if (location.pathname === route) {
            return true;
        }
    }
    
    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <ExplorerIcon fill={pathMatchRoute('/') ? '#2c2c2c' :
                            '#8f8f8f'} width='36px' height='36px'/>
                        <p className={
                            pathMatchRoute('/') 
                            ? 'navbarListItemActive' 
                            : 'navbarListItem'
                        }>
                            Explore
                        </p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/offers')}>
                        <OfferIcon fill={pathMatchRoute('/offers') ? '#2c2c2c' :
                            '#8f8f8f'} width='36px' height='36px'/>
                        <p className={
                            pathMatchRoute('/offer') 
                            ? 'navbarListItemActive' 
                            : 'navbarListItem'
                        }>
                            Offer
                        </p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' :
                            '#8f8f8f'} width='36px' height='36px'/>
                        <p className={
                            pathMatchRoute('/profile') 
                            ? 'navbarListItemActive' 
                            : 'navbarListItem'
                        }>
                            Profile
                        </p>
                    </li>
                </ul>
            </nav>
       </footer>
    )
}

export default Navbar;
