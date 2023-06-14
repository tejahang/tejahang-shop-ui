import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword1 = (event) => {
    setPassword1(event.target.value);
  };
  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password1 || !password2) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Please enter all fields',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (password1 !== password2) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Password Mismatch',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/users/signup',
          {
            firstName,
            lastName,
            email,
            password1,
          }
        );

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Created',
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'User already exists',
          showConfirmButton: false,
          timer: 2000,
        });
      }

      // take to another page
    }
  };

  return (
    <div id='container'>
      <div className='form-wrap'>
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute</p>

        <form onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label for='first-name'>First Name</label>
            <input
              onChange={handleFirstNameChange}
              type='text'
              name='firstName'
              id='first-name'
              value={firstName}
            />
          </div>
          <div className='form-group'>
            <label for='last-name'>Last Name</label>
            <input
              onChange={handleLastNameChange}
              type='text'
              name='lastName'
              id='last-name'
              value={lastName}
            />
          </div>
          <div className='form-group'>
            <label for='email'>Email</label>
            <input
              onChange={handleEmailChange}
              type='email'
              name='email'
              id='email'
              value={email}
              required
            />
          </div>
          <div className='form-group'>
            <label for='password'>Password</label>
            <input
              onChange={handlePassword1}
              type='password'
              name='password1'
              id='password'
              value={password1}
            />
          </div>
          <div className='form-group'>
            <label for='password2'>Confirm Password</label>
            <input
              onChange={handlePassword2}
              type='password'
              name='pasword2'
              id='password2'
              value={password2}
            />
          </div>
          <button type='submit' className='btn'>
            Sign Up
          </button>
          <p className='bottom-text'>
            By clicking the Sign Up button, you agree to our
            <a href='#'>Terms & Conditions</a> and
            <a href='#'>Privacy Policy</a>
          </p>
          <br />
          <p>
            Already have an account? <a href='/login'>Login Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignupForm;
