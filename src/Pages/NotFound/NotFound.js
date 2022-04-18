import React from 'react';
import img from '../../images/404.png'

const NotFound = () => {
      return (
            <div className='text-center my-5'>
                  <img className='img-fluid' src={img} alt="" />
                  <h4 className='text-danger'>The page you are looking for, not found!</h4>
            </div>
      );
};

export default NotFound;