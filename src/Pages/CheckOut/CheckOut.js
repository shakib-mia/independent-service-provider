import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Home/Services/Card/Card';

const CheckOut = () => {
      const productImage = localStorage.getItem('productImage')
      const productDesc = localStorage.getItem('productDesc')
      const productPrice = localStorage.getItem('productPrice')
      return (
            <Container className='row'>
                  <div className="col-12 col-lg-6"><Card image={productImage} description={productDesc} price={productPrice}></Card></div>
            </Container>
      );
};

export default CheckOut;