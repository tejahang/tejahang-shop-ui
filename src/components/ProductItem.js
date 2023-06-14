import { useContext } from 'react';
import ProductContext from './../context/products';
import { useNavigate, useParams } from 'react-router-dom';

function ProductItem() {
  const navigate = useNavigate();
  const { products, cart, currentUser, isAuthenticated } =
    useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((el) => el.id === parseInt(id));

  if (products === undefined) {
    return;
  }

  const handleCartClick = async (event) => {
    event.preventDefault();
    // await cart(currentUser.id, product.id);

    if (isAuthenticated()) {
      // navigate('/cart');
      await cart(currentUser[0].id, product.id);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='py-5'>
      <div className='container px-4 px-lg-5 my-5'>
        <div className='row gx-4 gx-lg-5 align-items-center'>
          <div className='col-md-6'>
            <img
              className='card-img-top mb-5 mb-md-0'
              src={`http://localhost:5000/img/${product.image}`}
              alt='...'
            />
          </div>
          <div className='col-md-6'>
            {product.sale && (
              <div
                className='badge bg-danger text-white'
                style={{ top: '0.5rem', right: '0.5rem' }}
              >
                Sale
              </div>
            )}
            {product.count && (
              <div className='small mb-1 text-success'>
                In Stock :{' '}
                <span className='text-danger'>{product.count} left</span>
              </div>
            )}
            {!product.count && (
              <div className='small mb-1 text-danger'>
                Out of Stock :{' '}
                <span className='text-danger'>{product.count} left</span>
              </div>
            )}
            <h1 className='display-5'>{product.title}</h1>
            <div className='fs-5 mb-5'>
              <span>${product.price}</span>
              <div className='small mt-3 mb-1'>Brand: {product.brand}</div>
            </div>
            <p className='lead'>{product.description}</p>
            <div className='d-flex'>
              <a href='#'>
                {' '}
                <button
                  onClick={handleCartClick}
                  className='btn btn-outline-dark flex-shrink-0'
                  type='button'
                >
                  <i className='bi-cart-fill me-1'></i>
                  Add to cart
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
