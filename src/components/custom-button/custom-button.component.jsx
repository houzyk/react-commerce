import React from "react";

// css
import './custom-button.styles.scss'

const CustomButton = ({ children, ...other }) => {
    return (
        <button className="custom-button" {...other}>
            {children}
        </button>
    );
}

export default CustomButton;
