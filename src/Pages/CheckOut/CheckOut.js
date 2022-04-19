import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Home/Services/Card/Card';

const CheckOut = () => {
      window.location.reload();
      const productImage = localStorage.getItem('productImage')
      const productDesc = localStorage.getItem('productDesc')
      const productPrice = localStorage.getItem('productPrice')
      return (
            <Container className='row'>
                  <div className="col-6"><Card image={productImage} description={productDesc} price={productPrice}></Card></div>
            </Container>
      );
};

export default CheckOut;