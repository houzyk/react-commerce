import React from "react";

// css
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...other }) => {
    return (
        <button
          className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
          {...other}
        >
            {children}
        </button>
    );
}

export default CustomButton;
