import React, { useEffect, useState } from 'react';
import ManageStudent from '../ManageStudent/ManageStudent';

const SuccesStudent = () => {
    const [student, setStudent] = useState([]);

    const url = `./student.json`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data));
    }, []);

    return (
        <div className="container text-center mt-5">
        <h3 className="text-center mb-5 mt-5">OUR SUCCESSFUL STUDENTS</h3>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            student.map(student => <ManageStudent
                

                students={student}>

                </ManageStudent>)
        }
       
       </div>
       </div>
    );
};

export default SuccesStudent;