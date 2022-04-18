import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import googleIcon from '../../images/social/Google__G__Logo.png';
import githubIcon from "../../images/social/github.png"
import facebookIcon from "../../images/social/facebook-icon.png";

const GoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
            .then(result => {
                  localStorage.setItem("email", result.user.email);
                  localStorage.setItem("name", result.user.displayName);
                  window.location.reload();
            })
}

const GithubSignIn = () => {
      const provider = new GithubAuthProvider();

      signInWithPopup(auth, provider)
            .then(result => {
                  localStorage.setItem("email", result.user.email);
                  localStorage.setItem("name", result.user.displayName);
                  window.location.reload();
            })
            .catch(error => {
                  console.log(error)
            })
}

const auth = getAuth(app);


const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);


      const HandleCreateUser = () => {
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user)
                  })
                  .catch(error => console.error(error))
      }

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      console.log(user)
      localStorage.setItem("email", user ? user.user.email : "Login");

      if (error) {
            return (
                  <div className='mt-4 col-10 col-lg-6 mx-auto shadow p-4'>
                        <h1 className='text-center'>Login Here</h1>

                        <form>
                              <label htmlFor="email" className='fw-bold'>Email</label>
                              <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' onChange={e => setEmail(e.target.value)} />
                              <label htmlFor="password" className='fw-bold mt-3'>Password</label>
                              <input type="password" id="password" className='form-control' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                              <p className='mt-4 text-danger'>{error.message}</p>
                              <button type='submit' className='btn btn-primary' onClick={HandleCreateUser}
                              >Login</button>
                              <button className='btn btn-info mt-4 ms-2'
                                    onClick={async () => {
                                          await sendPasswordResetEmail(email);
                                          alert('Sent email');
                                    }}
                              >
                                    Reset password
                              </button>
                              <h6 className='mt-3'>New in Samad's Edu Care? <Link className='text-decoration-none' to='/register'>Register Here</Link></h6>
                        </form>
                        <div className='d-flex'>
                              <hr className='w-100' />
                              <p className='px-4 pt-1'>or</p>
                              <hr className='w-100' />
                        </div>
                        <div className='text-center'>
                              <button className='col-8 my-2 btn btn-outline-success' onClick={GoogleSignIn}>Continue With Google <img src={googleIcon} width="25px" alt="" /></button>
                              <button className='col-8 my-2 btn btn-outline-dark' onClick={GithubSignIn}>Continue With Github <img src={githubIcon} width="25px" alt="" /></button>
                              <button className='col-8 my-2 btn btn-outline-primary'>Continue With Facebook <img src={facebookIcon} width="25px" alt="" /></button>
                        </div>
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
                        <button className='btn btn-info mt-2 ms-2'
                              onClick={async () => {
                                    await sendPasswordResetEmail(email);
                                    alert('Sent email');
                              }}

                        >
                              Reset password
                        </button>

                        <h6 className='mt-3'>New in Samad's Edu Care? <Link className='text-decoration-none' to='/register'>Register Here</Link></h6>

                        <div className='d-flex'>
                              <hr className='w-100' />
                              <p className='px-4 pt-1'>or</p>
                              <hr className='w-100' />
                        </div>
                        <div className='text-center'>
                              <button className='col-8 my-2 btn btn-outline-success' onClick={GoogleSignIn}>Continue With Google <img src={googleIcon} width="25px" alt="" /></button>
                              <button className='col-8 my-2 btn btn-outline-dark' onClick={GithubSignIn}>Continue With Github <img src={githubIcon} width="25px" alt="" /></button>
                              <button className='col-8 my-2 btn btn-outline-primary'>Continue With Facebook <img src={facebookIcon} width="25px" alt="" /></button>
                        </div>
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
                  <button className='btn btn-info mt-4 ms-2'
                        onClick={async () => {
                              await sendPasswordResetEmail(email);
                              alert('Sent email');
                        }}

                  >
                        Reset password
                  </button>

                  <h6 className='mt-3'>New in Samad's Edu Care? <Link className='text-decoration-none' to='/register'>Register Here</Link></h6>
                  <div className='d-flex'>
                        <hr className='w-100' />
                        <p className='px-4 pt-1'>or</p>
                        <hr className='w-100' />
                  </div>
                  <div className='text-center'>
                        <button className='col-8 my-2 btn btn-outline-success' onClick={GoogleSignIn}>Continue With Google <img src={googleIcon} width="25px" alt="" /></button>
                        <button className='col-8 my-2 btn btn-outline-dark' onClick={GithubSignIn}>Continue With Github <img src={githubIcon} width="25px" alt="" /></button>
                        <button className='col-8 my-2 btn btn-outline-primary'>Continue With Facebook <img src={facebookIcon} width="25px" alt="" /></button>
                  </div>
            </div>
      );
};

export default Login;