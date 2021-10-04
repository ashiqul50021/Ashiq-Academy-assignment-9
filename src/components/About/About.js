import React from 'react';
import aboutImg from '../../image/about.png';
import aboutBackground from '../../image/aboutbackground.png'


const About = () => {
    let Aboutstyles = {
    
        backgroundImage: `url(${ aboutBackground })`,
        
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '',
        
        
   };


    return (
        <div style={Aboutstyles}>
          
            
            <div className="container">
                
                <div className="row">
                <h3 className="text-center mt-5">ABOUT US</h3>
                    <div className="col-md-6">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-6 mt-5 shadow p-3 mb-5 bg-body rounded">
                        <h3 className="mb-5 mt-5 text-center">Benefits About Online Learning Expertise</h3>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Best learning platform
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">There is no end to education. It is not that you read a book, <code>a process of learning.</code> pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die,.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Digital learning System
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">There is no end to education. It is not that you read a book, <code>a process of learning.</code> pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die,.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        totaly unique platform
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">There is no end to education. It is not that you read a book, <code>a process of learning.</code> pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die,.</div>
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