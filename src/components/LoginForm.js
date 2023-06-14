import { useState, useContext } from 'react';
import ProductContext from '../context/products';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cookies = new Cookies();

  const navigate = useNavigate();

  const { login, setCurrentUser } = useContext(ProductContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Please enter all fields',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      const response = await login(email, password);

      console.log(response.data.token);

      cookies.set('jwt', response.data.token, {
        path: '/',
      });

      setCurrentUser(response.data.user.firstname);
      navigate('/');
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Invalid Credentials',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div id='container'>
      <div className='form-wrap'>
        <h1>Login</h1>
        <br />
        <br />
        <form onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label for='first-name'>Email</label>
            <input
              onChange={handleEmailChange}
              type='text'
              name='email'
              id='first-name'
              value={email}
              required
            />
          </div>

          <div className='form-group'>
            <label for='password'>Password</label>
            <input
              onChange={handlePassword}
              type='password'
              name='password'
              id='password'
              value={password}
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
            Don't have an account? <a href='/signup'>SignUp Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
