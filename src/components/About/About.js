import React from 'react';
import aboutImg from '../../image/about.png';


const About = () => {
    return (
        <div>
          
            
            <div className="container">
                <h3 className="text-center">ABOUT US</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h3 className="mb-5 mt-5 text-center">Benefits About Online Learning Expertise</h3>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Best learning platform
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">There is no end to education. It is not that you read a book, <code>a process of learning.</code> pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die,.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Digital learning System
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">There is no end to education. It is not that you read a book, <code>a process of learning.</code> pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die,.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        totaly unique platform
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">There is no end to education. It is not that you read a book, <code>a process of learning.</code> pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die,.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;