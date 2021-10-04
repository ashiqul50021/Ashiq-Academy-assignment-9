import React from 'react';
import { Link } from 'react-router-dom';

const ManageStudent = (props) => {
    const {studentname, img, description} = props.students;
    return (
        <div class="col">
        <div class="card h-100">
          <div className="">
          <div>
           <img src={img} class="card-img-top rounded-circle w-25" alt="..." height="90px" />
           </div>
            <div class="card-body">
                <h5 class="card-title">{studentname}</h5>
                <p>{description}</p>
          
                <Link class="btn btn-primary" to="/" role="button">see more!</Link>
            </div>
          </div>
        </div>
    </div>
    );
};

export default ManageStudent;