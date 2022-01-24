import React from "react";

// css
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...other }) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
            {...other}
        >
            {children}
        </button>
    );
}

export default CustomButton;
