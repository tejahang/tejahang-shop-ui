import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ProductContext from '../context/products';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cart, currentUser } = useContext(ProductContext);

  // undefined when first loads
  if (product === undefined) {
    return;
  }

  const handleImageClick = (event) => {
    navigate(`/product/${product.id}`);
  };

  const handleCartClick = async (event) => {
    event.preventDefault();
    await cart(currentUser.id, product.id);

    navigate('/cart');
  };

  return (
    <div className='col-6 col-md-6 col-lg-4 mb-3'>
      <div className='card h-100'>
        {/* <!-- Sale badge--> */}
        {product.sale && (
          <div
            className='badge bg-danger text-white position-absolute'
            style={{ top: '0.5rem', right: '0.5rem' }}
          >
            Sale
          </div>
        )}

        {/* <!-- Product image--> */}
        <img
          onClick={handleImageClick}
          className='card-img-top'
          src={`http://localhost:5000/img/${product.image}`}
          alt={`${product.title}`}
        />
        {/* <!-- Product details--> */}
        <div className='card-body p-4'>
          <div className='text-center'>
            {/* <!-- Product name--> */}
            <h5 className='fw-bolder'>{product.title.slice(0, 20) + '....'}</h5>
            {/* <!-- Product price--> */}
            $18.00
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            <a
              onClick={handleCartClick}
              className='btn btn-outline-dark mt-auto'
              href='#'
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
