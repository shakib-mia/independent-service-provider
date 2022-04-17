import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from './Card/Card';

const Services = () => {
      const [services, getServices] = useState([]);

      useEffect(() => {
            fetch("data.json")
                  .then(res => res.json())
                  .then(data => getServices(data))
      }, []);

      console.log(services)
      return (
            <Container className='my-5'>
                  <h1 className='text-center'>Our Packages</h1>
                  <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 justify-content-center gap-3 mt-4">
                        {
                              services.map(service => <Card key={service.id} title={service.title} image={service.img}></Card>)
                        }
                  </div>
            </Container>
      );
};

export default Services;