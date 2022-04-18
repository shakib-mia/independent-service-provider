import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);

      if (error) {
            return (
                  <div className='mt-4 col-10 col-lg-6 mx-auto shadow p-4'>
                        <h1 className='text-center'>Login Here</h1>
                        <label htmlFor="email" className='fw-bold'>Email</label>
                        <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="password" className='fw-bold mt-3'>Password</label>
                        <input type="password" id="password" className='form-control' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        <p className='mt-4 text-danger'>{error.message}</p>
                        <button type='submit' className='btn btn-primary' onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                        <h6 className='mt-3'>New in Samad's Edu Care? <Link className='text-decoration-none' to='/register'>Register Here</Link></h6>
                  </div>
            );
      }
      if (loading) {
            return (
                  <div className='mt-4 col-10 col-lg-6 mx-auto shadow p-4'>
                        <h1 className='text-center'>Login Here</h1>
                        <label htmlFor="email" className='fw-bold'>Email</label>
                        <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="password" className='fw-bold mt-3'>Password</label>
                        <input type="password" id="password" className='form-control' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        <div className="d-flex align-items-center mt-4">
                              <button type='submit' className='btn btn-primary' onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                              <div className="spinner-border ms-3" role="status"></div>
                        </div>

                        <h6 className='mt-3'>New in Samad's Edu Care? <Link className='text-decoration-none' to='/register'>Register Here</Link></h6>
                  </div>
            );
      }
      if (user) {
            localStorage.setItem('name', user.name)
      }

      return (
            <div className='mt-4 col-10 col-lg-6 mx-auto shadow p-4'>
                  <h1 className='text-center'>Login Here</h1>
                  <label htmlFor="email" className='fw-bold'>Email</label>
                  <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' onChange={e => setEmail(e.target.value)} />
                  <label htmlFor="password" className='fw-bold mt-3'>Password</label>
                  <input type="password" id="password" className='form-control' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                  <button type='submit' className='btn btn-primary mt-4' onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>

                  <h6 className='mt-3'>New in Samad's Edu Care? <Link className='text-decoration-none' to='/register'>Register Here</Link></h6>
            </div>
      );
};

export default Login;