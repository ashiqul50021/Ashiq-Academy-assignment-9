import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const OurService = () => {
    const [courses, setCourses] = useState([]);

    const url = `./courses.json`;


   useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);


    return (
        <div className="container text-center">
            <h3 className="text-center mb-4 mt-4">OUR SERVICES</h3>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                courses.slice(0,3).map(courses => <ManageService 
                    key={courses.key}

                    course={courses}>

                    </ManageService>)
            }
           <div style={{ margin:'20px auto'}}>
           <a class="btn btn-primary" href="/services" role="button">More Courses</a>
           </div>


        </div>
        
        </div>
    );
};

export default OurService;