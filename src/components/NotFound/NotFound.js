import React from 'react';
import errorimg from '../../image/error.jpg';
 
const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={errorimg} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;