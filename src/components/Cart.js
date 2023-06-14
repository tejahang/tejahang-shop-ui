import { useContext } from 'react';
import ProductContext from '../context/products';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import Swal from 'sweetalert2';

function Cart() {
  const { cartItems, getCheckout } = useContext(ProductContext);
  const navigate = useNavigate();

  let totalBill = null;

  const renderedTables = cartItems.map((item, index) => {
    totalBill += item.price * item.count;
    return <Table key={index} item={item} index={index} />;
  });

  const handleCheckout = (event) => {
    event.preventDefault();

    // posts to db in each iteration
    cartItems.map((el) => {
      return getCheckout(el.id, el.count, el.price * 1 * el.count);
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thank You For Shopping!!',
      showConfirmButton: false,
      timer: 2000,
    });

    navigate('/');
  };

  return (
    <div className='container checkout'>
      <div className='row'>
        <div className='col-md-12 col-lg-8'>
          <div className='items'>
            {/* Table */}

            <table className='table'>
              <thead>
                <tr className='table-active'>
                  <th scope='col'>No.</th>
                  <th scope='col'>Item</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Price per item</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>{renderedTables}</tbody>
            </table>
          </div>
        </div>
        <div className='col-md-12 col-lg-4'>
          <div className='summary'>
            <h3>Summary</h3>
            <div className='summary-item'>
              <span className='text'>Subtotal :</span>
              <span className='price'>${totalBill}</span>
            </div>
            <div className='summary-item'>
              <span className='text'>Discount :</span>
              <span className='price'>$0</span>
            </div>
            <div className='summary-item'>
              <span className='text'>Shipping :</span>
              <span className='price'>$0</span>
            </div>
            <div className='summary-item'>
              <strong>
                <span className='text'>Grand Total :</span>
                <span className='price'>${totalBill}</span>
              </strong>
            </div>
            <button
              onClick={handleCheckout}
              type='button'
              className='btn btn-primary btn-lg btn-block'
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
