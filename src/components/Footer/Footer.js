import React from 'react';
import footerimage from './../../image/logo-2.png'

const Footer = () => {
    const footerStyle = {
        backgroundColor: "gray",
        color: "white",
        overFlow: "hidden",
    };
    const footercolor = {
        backgroundColor:"black",
        width:"100%",
        paddingBottom:"5px",
    }
    return (
        <footer  className="mt-5">
            <div style={footerStyle}>
                <div className="text-center">
                    <h4>
                        <img src={footerimage} alt="" />
                    </h4>
                    <p>A Digital Education System of Bangladesh.</p>
                    <p>better Education , better Life</p>
                    <div>
                        <p>social icons</p>
                    </div>
                </div>
                
                <div className="container-fluid" style={footercolor}>
                <hr />
                <p  className="text-center">copyright @ Ashiq Academy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;