import React from 'react';
import { Link } from 'react-router-dom';
import bannerbackground from "../../image/banner6.jpg";


const Banner = () => {

    let bannerStyles = {
    
        backgroundImage: `url(${ bannerbackground })`,
        
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '80vh',
        
        
   };
    // const bannerStyle = {
    //     backgroundColor: ""
    // }

    return (
        <div  className="" style={bannerStyles}>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="text-white">
                                <p className="mt-5"><small>You only have to know one thing</small></p>
                            <h1 className="mb-4 fw-bold">EDUCATION<br/>IS THE BACKBONE OF NATION</h1>
                            <p>This is one kind of education that change your future,you like most this becouse we provide digital solution. better country , better eduction.</p>
                            <Link class="btn btn-primary mt-4" to="/" role="button">Explore More!</Link>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;