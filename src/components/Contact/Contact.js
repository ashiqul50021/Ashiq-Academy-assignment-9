import React from 'react';
import { Link } from 'react-router-dom';
import contactImg from '../../image/contact.png';


const Contact = () => {
    return (
        <div>
            
            <div className="container text-center mt-5">
                <h3>HAVE SOME QUESTION?</h3>
                <p className="mb-5"><small>Please Contact us !</small></p>
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <input type="text" placeholder="Name" className="w-100 mb-3" />
                            <br />
                            <input type="email" name="main" id="" placeholder="Your Mail" className="w-100 mb-3" />
                            <br />
                            <input type="text" placeholder="Subjects" className="w-100 mb-3" />
                            <br />
                            <textarea name="" id="" cols="30" rows="10" className="w-100 mb-3"></textarea>
                            <br />
                            <Link class="btn btn-primary" to="/contact" role="button">Send Message</Link>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src={contactImg} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;