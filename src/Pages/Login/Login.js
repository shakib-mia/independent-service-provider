import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      return (
            <div className='mt-4 col-10 col-lg-6 mx-auto shadow p-4'>
                  <h1 className='text-center'>Login Here</h1>
                  <label htmlFor="email" className='fw-bold'>Email</label>
                  <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' />
                  <label htmlFor="password" className='fw-bold mt-3'>Password</label>
                  <input type="password" id="password" className='form-control' placeholder='Password' />
                  <button type='submit' className='btn btn-primary mt-4'>Login</button>

                  <h6>New in Samad's Edu Care? <Link to='/register'>Register Here</Link></h6>
            </div>
      );
};

export default Login;