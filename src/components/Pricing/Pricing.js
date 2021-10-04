import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="mt-5">
            <div className="container mt-5">
                <h2 className="text-center mt-5 mb-5">MEMBERSHIP PRICING</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row row-cols-1 g-4">
                            <div class="col">
                                <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                                    
                                    <div class="card-body text-center">
                                        <h3>Student Plan</h3>
                                        <hr />
                                        <h4>$0 / month</h4>
                                        <div>
                                            <p>Free Access</p>
                                            <p>Live Class</p>
                                            <p>Live support</p>
                                            <p>crash course</p>
                                            <p>best service</p>
                                        </div>

                                        <Link class="btn btn-primary" to="/" role="button">Join Now!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row row-cols-1 g-4">
                            <div class="col">
                                <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                                    
                                    <div class="card-body text-center">
                                        <h3>Business Plan</h3>
                                        <hr />
                                        <h4>$50 / month</h4>
                                        <div>
                                            <p>Free Access</p>
                                            <p>Live Class</p>
                                            <p>Live support</p>
                                            <p>crash course</p>
                                            <p>Discount</p>
                                        </div>

                                        <Link class="btn btn-primary" to="/" role="button">Join Now!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row row-cols-1 g-4">
                            <div class="col">
                                <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                                    
                                    <div class="card-body text-center">
                                       
                                        <h3>Premier Plan</h3>
                                        <hr />
                                        <h4>$100 / month</h4>
                                        <div>
                                            <p>Free Access</p>
                                            <p>Live Class</p>
                                            <p>Live support</p>
                                            <p>crash course</p>
                                            <p>Home tutors</p>
                                            
                                        </div>

                                        <Link class="btn btn-primary" to="/" role="button">Join Now!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;