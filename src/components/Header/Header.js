import React from 'react';
import logo from './../../image/logo-2.png';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle={
        color:"red",
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3  bg-body rounded ">
            <div className="container d-flex justify-content-between">
                <div>
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="" width="50%" height="30%" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link" to="/pricing">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            


                        </ul>

                    </div>
                </div>
            </div>
        </nav>
        
        </div>
    );
};

export default Header;