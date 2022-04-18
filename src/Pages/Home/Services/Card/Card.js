import React from 'react';
import { Link } from 'react-router-dom';

const add = (props) => {
      localStorage.setItem('productImage', props.image)
      localStorage.setItem('productDesc', props.description)
      localStorage.setItem('productPrice', props.price)
}

const Card = (props) => {
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
                              <Link to="/checkout" className="btn btn-primary" onClick={() => add(props)}>Book Now</Link>
                        </div>
                  </div>
            </div>
      );
};

export default Card;