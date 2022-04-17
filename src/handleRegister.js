import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from './firebase.init'

const register = event => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let confirmPass = document.getElementById('confirm-password').value;

      if (password === confirmPass) {
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        const user = result.user;
                        localStorage.setItem('email', user.email)
                  })
      } else {
            alert("passwords didn't match")
      }
}