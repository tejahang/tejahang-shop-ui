import { useContext } from 'react';
import ProductContext from '../context/products';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Navbar() {
  const { currentUser, isAuthenticated, getCartItems } =
    useContext(ProductContext);

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleClick = (event) => {
    cookies.set('jwt', '', {
      path: '/',
    });
    navigate('/');
    // redirect(/);
  };

  const handleCartClick = async (event) => {
    event.preventDefault();
    // await cart(currentUser.id, product.id);

    if (isAuthenticated()) {
      console.log(await getCartItems());
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container px-4 px-lg-5'>
          <a className='navbar-brand' href='/'>
            Tejahang Shop
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#!'
                ></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#!'></a>
              </li>
            </ul>
            <div className='d-flex'>
              <a onClick={handleCartClick} href='/cart'>
                <button className='btn btn-outline-dark' type='submit'>
                  <i className='bi-cart-fill me-1'></i>
                  Cart
                  {/* <span className='badge bg-dark text-white ms-1 rounded-pill'>
                    0
                  </span> */}
                </button>
              </a>
              <ul className='navbar-nav me-auto'>
                {!currentUser && (
                  <li className='nav-item'>
                    <a className='nav-link' href='/signup'>
                      SignUp
                    </a>
                  </li>
                )}
                {!currentUser && (
                  <li className='nav-item'>
                    <a className='nav-link' href='/login'>
                      Login
                    </a>
                  </li>
                )}
                {currentUser && (
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      {currentUser[0].firstname}
                    </a>
                  </li>
                )}
                {currentUser && (
                  <li className='nav-item'>
                    <a className='nav-link' onClick={handleClick} href='/'>
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
