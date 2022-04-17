import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../../images/banner.jpg'

const Banner = () => {
      return (
            <Container className='my-3'>
                  <div className='row row-cols-1 row-cols-lg-2 align-items-center'>
                        <img src={banner} alt="Banner" className='img-fluid' />
                        <div className="banner-text">
                              <h3>Welcome to</h3>
                              <h1>Samad's Edu Care</h1>
                              <p>You will get professional study guide here. If you want to start journey with us. You can Enroll to Our Course.</p>

                              <button className='btn btn-outline-primary rounded-pill px-4'>Enroll Now <span>&#x02192;</span></button>
                        </div>
                  </div>
            </Container>
      );
};

export default Banner;