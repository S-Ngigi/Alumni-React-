import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>
                The page your looking for does not exist. 
                <Link to="/"> Home</Link>
            </p>
        </div>
    )
}
export default NotFound;
