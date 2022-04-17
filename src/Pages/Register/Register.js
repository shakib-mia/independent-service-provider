import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';

const auth = getAuth(app);

const register = event => {
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
                        localStorage.setItem('email', user.email)
                  })
                  .catch(err => document.getElementById('error').innerText = err)
      } else {
            alert("passwords didn't match")
      }
}

const Register = () => {
      return (
            <div>
                  <h1 className='text-center'>Please Register</h1>

                  <form className='shadow col-6 mx-auto p-4'>
                        <div className="row">
                              <div className="my-3 col-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" className='form-control' placeholder='Enter Your First Name' required />
                              </div>

                              <div className="my-3 col-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" className='form-control' placeholder='Enter Your Last Name' required />
                              </div>

                        </div>

                        <div className="my-3">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" className='form-control' placeholder='Enter Your Email Here' />
                        </div>
                        <div className="my-3">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" className='form-control' placeholder='Create a Strong Password' />
                        </div>
                        <div className="my-3">
                              <label htmlFor="confirm-password">Confirm Password</label>
                              <input type="password" id="confirm-password" className='form-control' placeholder='Re-type Your Password' />
                        </div>
                        <div id="error" className="text-danger"></div>
                        <input type="submit" value="Register" className='btn btn-success' onClick={register} />
                  </form>
            </div>
      );
};

export default Register;