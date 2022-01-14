import React from "react";

// css
import './homepage.styles.scss';

// component
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}

export default HomePage;