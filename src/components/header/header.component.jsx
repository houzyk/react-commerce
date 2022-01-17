import React from "react";
import { Link } from "react-router-dom";

// css
import './header.styles.scss';

// assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>              
            </div>
        </div>
    );
}

export default Header;