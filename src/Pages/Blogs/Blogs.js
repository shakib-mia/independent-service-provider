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
                              <Accordion.Header>Why I use Firebase? What are the other options?</Accordion.Header>
                              <Accordion.Body>
                                    <p>I use firebase, because firebase is simple, lightweight, beginners friendly and industrially recognized.</p>
                                    <p>
                                          We can use other options instead of firebase. They are...
                                          <ul>
                                                <li>Flutter</li>
                                                <li>Parse.</li>
                                                <li>Back4App</li>
                                                <li>AWS Amplify</li>
                                                <li>Kuzzle</li>
                                                <li>Couchbase</li>
                                                <li>NativeScripts</li>
                                                <li>RxDB</li>
                                                ...and so on
                                          </ul>
                                    </p>
                              </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                              <Accordion.Header>Without Authentication, what can we do in firebase?</Accordion.Header>
                              <Accordion.Body>
                                    <p>Besides authentication firebase offers a number of services. They are</p>
                                    <dt>Analytics:</dt>
                                    <dd>That presents data about user behavior in iOS and Android Apps</dd>
                                    <dt>Cloud Messaging:</dt>
                                    <dd>It lets companies reliably receive and send messages on iOS, Android without any cost.</dd>
                                    <dt>Performance Monitoring Service</dt>
                                    <dd>It gives developers insight into the performance characteristics of their iOS and Android app</dd>
                                    and so on...
                              </Accordion.Body>
                        </Accordion.Item>
                  </Accordion>
            </Container>
      );
};

export default Blogs;