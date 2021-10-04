import React, { useEffect, useState } from 'react'

import ManageService from '../ManageService/ManageService';

const Services = () => {
    const [services, setServices] = useState([]);


const url = `./courses.json`;


   useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
       
        <div className="container mb-5">
            <h3 className="text-center mb-5">OUR SERVICES</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
        {
            services.map(services => <ManageService course={services}></ManageService>)
        }
       


    </div>
        </div>
        </div>
    );
};

export default Services;