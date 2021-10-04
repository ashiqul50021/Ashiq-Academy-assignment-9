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
        <div className="container text-center">
        <h3 className="text-center mb-3 mt-4">OUR SUCCESSFUL STUDENTS</h3>
        <hr />
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