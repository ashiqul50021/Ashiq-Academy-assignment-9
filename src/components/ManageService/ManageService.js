import React from 'react';
import { Link } from 'react-router-dom';

const ManageService = (props) => {
    const {coursename, img, rating, instructor, lacture, price} = props.course;
   
    return (
        <div class="col">
            <div class="card h-100  shadow p-3 mb-5 bg-body rounded">
                <img src={img} class="card-img-top" alt="..." height="200px" />
                <div class="card-body">
                    <h5 class="card-title">{coursename}</h5>
                    <p>Course Ratings: {rating}</p>
                    <p>course instructor: {instructor}</p>
                    <p>Lacture: {lacture} Classes</p>
                    <p>price: $ {price} USD</p>
                    <Link class="btn btn-primary" to="/" role="button">Enroll Now!</Link>
                </div>
            </div>
        </div>
    );
};

export default ManageService;