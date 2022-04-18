import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Card = (props) => {
      let navigate = useNavigate();
      const booking = () => {
            navigate('/checkout')
            window.location.reload();
      }

      return (
            <div>
                  <div className="card shadow h-100">
                        <img src={props.image} className="card-img-top" alt="" />
                        <div className="card-body">
                              <h3>{props.title}</h3>
                              <p>{props.description}</p>
                        </div>
                        <div className="card-footer">
                              <h5>{props.price}</h5>
                              <button className="btn btn-primary" onClick={booking}>Book Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default Card;