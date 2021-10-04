import React from 'react';
import bannerImg from "../../image/banner.png";

const Banner = () => {
    // const bannerStyle = {
    //     backgroundColor: ""
    // }

    return (
        <div className="mb-5">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <h1 className="mb-4">EDUCATION<br/>IS THE BACKBONE OF NATION</h1>
                            <p>This is one kind of education that change your future,you like most this becouse we provide digital solution. better country , better eduction.</p>
                            <a class="btn btn-primary mt-4" href="/" role="button">Explore More!</a>
                        </div>
                        <div className="col-md-6 mb-4">
                            <img src={bannerImg} alt="" height="100%" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;