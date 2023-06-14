import { useContext } from 'react';
import ProductContext from '../context/products';
import TransactionTable from './TransactionTable';

function BusinessList() {
  const { transactionList } = useContext(ProductContext);

  console.log(transactionList);

  const renderedTables = transactionList.map((item) => {
    return <TransactionTable key={item.id} item={item} />;
  });

  return (
    <div className='container checkout'>
      <div className='row'>
        <h1 className='mb-3'>Transactions:</h1>
        <div className='col-md-12 col-lg-8'>
          <div className='items'>
            {/* Table */}

            <table className='table'>
              <thead>
                <tr className='table-active'>
                  <th scope='col'>No.</th>
                  <th scope='col'>user_id</th>
                  <th scope='col'>quantity</th>
                  <th scope='col'>product_id</th>
                  <th scope='col'>total</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>{renderedTables}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessList;
