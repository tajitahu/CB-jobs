import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <div>
             <Link to="/"> {/* Link to main page */}
                <img src="/logos/logo2.png?cache_bust=123456" style={{ width: "200px" }} alt="Logo" />
            </Link> {/* Your logo JSX code here */}
        </div>
    );
};
export default Logo;