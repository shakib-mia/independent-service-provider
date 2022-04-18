import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
      return (
            <Container className='col-12 col-md-4 col-lg-6'>
                  <h1 className='mt-4 text-center'>Blogs</h1>
                  <Accordion defaultActiveKey="0" className=' mt-5'>
                        <Accordion.Item eventKey="0">
                              <Accordion.Header>What are the Differences between Authentication and Authorization?</Accordion.Header>
                              <Accordion.Body>
                                    <p>Authentication is the process to detect who the user is. On the other hand Authorization is the process to decide what kind of information a user can access.</p>

                                    <p>
                                          <b>As an Example:</b>
                                          <br />
                                          Create an account with some document is Authentication. These documents can be phone number, email address, nid number and so on...
                                          <br />
                                          Again, accessing that account information in other times with password and other info. is Authentication.
                                    </p>
                              </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                              <Accordion.Header>Accordion Item #2</Accordion.Header>
                              <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                              </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                              <Accordion.Header>Accordion Item #2</Accordion.Header>
                              <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                              </Accordion.Body>
                        </Accordion.Item>
                  </Accordion>
            </Container>
      );
};

export default Blogs;