import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
      return (
            <div>
                  <div className="card shadow h-100">
                        <img src={props.image} className="card-img-top" alt="" />
                        <div className="card-body">
                              <h3>{props.title}</h3>
                              <p>{props.description}</p>
                              <small>{props.price}</small>
                              <Link to="/checkout" className="btn btn-primary">Book Now</Link>
                        </div>
                  </div>
            </div>
      );
};

export default Card;