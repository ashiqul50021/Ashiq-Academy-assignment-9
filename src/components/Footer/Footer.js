import React from 'react';
import footerimage from './../../image/logo-2.png';
import footerbg from '../../image/footerbg.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGofore, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const footerStyle = {
        backgroundImage: `url(${ footerbg })`,
       
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       width: '100%',
       height: '100%',
       
    };
    const footercolor = {
        backgroundColor:"black",
        width:"100%",
        paddingBottom:"5px",
    }
    return (
        <footer style={footerStyle}  className="mt-5">
            <div>
                <div className="text-center text-white">
                    <h4>
                        <img src={footerimage} alt="" />
                    </h4>
                    <p>A Digital Education System of Bangladesh.</p>
                    <p>better Education , better Life</p>
                    <div className="d-flex justify-content-center">
                        <div className="m-3"><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div className="m-3"><FontAwesomeIcon icon={faGithub}/></div>
                        <div className="m-3"><FontAwesomeIcon icon={faGofore}/></div>
                        <div className="m-3"><FontAwesomeIcon icon={faPinterest}/></div>
                    </div>
                </div>
                
                <div className="container-fluid" style={footercolor}>
                <hr />
                <p  className="text-center text-white">copyright @ Ashiq Academy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;