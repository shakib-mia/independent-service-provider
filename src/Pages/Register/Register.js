import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import googleIcon from '../../images/social/Google__G__Logo.png';
import githubIcon from "../../images/social/github.png"
import facebookIcon from "../../images/social/facebook-icon.png";

const auth = getAuth(app);

const Registration = event => {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let confirmPass = document.getElementById('confirm-password').value;
      let firstName = document.getElementById('firstName').value;
      let lastName = document.getElementById('lastName').value;
      event.preventDefault();

      if (password === confirmPass) {
            createUserWithEmailAndPassword(auth, email, password, firstName, lastName)
                  .then(result => {
                        const user = result.user;
                        localStorage.setItem('email', user.email);
                        localStorage.setItem("name", firstName + " " + lastName);
                  })
                  .catch(err => document.getElementById('error').innerText = err);

      } else {
            alert("passwords didn't match")
      }
}


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

const Register = () => {
      return (
            <div className='shadow col-12 col-md-6 mx-auto p-4'>
                  <h1 className='text-center'>Please Register</h1>

                  <form>
                        <div className="row">
                              <div className="my-3 col-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" className='form-control' placeholder='Enter Your First Name' title='Your First Name Will Go Here' required />
                              </div>

                              <div className="my-3 col-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" className='form-control' placeholder='Enter Your Last Name' title='Your Last Name Will Go Here' required />
                              </div>

                        </div>

                        <div className="my-3">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" className='form-control' title='Give Your email for future communication' placeholder='Enter Your Email Here' />
                        </div>
                        <div className="my-3">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" className='form-control' title='Try to Make a Strong Password' placeholder='Create a Strong Password' />
                        </div>
                        <div className="my-3">
                              <label htmlFor="confirm-password">Confirm Password</label>
                              <input type="password" id="confirm-password" className='form-control' title='Re-type Your Password' placeholder='Re-type Your Password' />
                        </div>
                        <div id="error" className="text-danger"></div>
                        <input type="submit" value="Register" className='btn btn-success' onClick={Registration} />

                        <h6 className='mt-3'>Already a Member? <Link to="/login" className='text-decoration-none'>Please Login</Link></h6>
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
};

export default Register;