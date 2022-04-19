import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import googleIcon from '../../images/social/Google__G__Logo.png';
import githubIcon from "../../images/social/github.png"
import facebookIcon from "../../images/social/facebook-icon.png";

const auth = getAuth(app);

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


const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleEmailBlur = event => {
            setEmail(event.target.value)
      }
      const handlePasswordBlur = event => {
            setPassword(event.target.value)
      }

      const handleSignIn = () => {
            createUserWithEmailAndPassword(auth, email, password)
                  .then(res => {
                        window.location.reload();
                        const user = res.user;
                        if (user) {
                              localStorage.setItem('email', user.email);
                              verifyEmail();
                        }
                  })
                  .catch(error => {
                        console.error(error)
                        document.getElementById('error').innerHTML = error
                  })

            localStorage.setItem('email', email)
      }

      const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                  .then(() => {
                        alert("email verification sent")
                  }).catch(err => console.error(err))
      }

      const resetPass = () => {
            sendPasswordResetEmail(auth, email)
                  .then(() => {
                        alert("Reset Link Sent")
                  }).catch(err => console.error(err))
      }

      return (
            <div className='mt-4 col-10 col-lg-6 mx-auto shadow p-4' id='login'>
                  <h1 className='text-center'>Login Here</h1>
                  <label htmlFor="email" className='fw-bold'>Email</label>
                  <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' onBlur={handleEmailBlur} required />
                  <label htmlFor="password" className='fw-bold mt-3'>Password</label>
                  <input type="password" id="password" className='form-control' placeholder='Password' onBlur={handlePasswordBlur} required />
                  <div id="error" className='text-danger'></div>
                  <button type='submit' className='btn btn-primary mt-4' onClick={handleSignIn}>Login</button>
                  <button className='btn btn-info mt-4 ms-2' onClick={resetPass}>
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