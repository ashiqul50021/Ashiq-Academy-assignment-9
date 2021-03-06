import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import ourserimg from '../../image/servicebg.png'
import { Link } from 'react-router-dom';

const OurService = () => {
    let OurServiceStyles = {
    
        backgroundImage: `url(${ ourserimg })`,
        
        backgroundPosition: '',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '',
        
    }

    const [courses, setCourses] = useState([]);

    const url = `./courses.json`;


   useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);


    return (
       <div style={OurServiceStyles} >
            <div className="container text-center">
            <h3 className="text-center mb-4 mt-4">OUR SERVICES</h3>
     
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
            {
                courses.slice(0,4).map(courses => <ManageService 
                    key={courses.key}

                    course={courses}>

                    </ManageService>)
            }
           <div style={{ margin:'20px auto'}}>
           <Link class="btn btn-primary" to="/services" role="button">More Courses</Link>
           </div>


        </div>
        
        </div>
       </div>
    );
};

export default OurService;