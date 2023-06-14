import ProductCard from './ProductCard';
import ProductContext from '../context/products';
import { useContext } from 'react';

function SearchResults() {
  const { searchResults } = useContext(ProductContext);

  const renderedResults = searchResults.map((result) => {
    return <ProductCard key={result.id} product={result} />;
  });

  return (
    <div className='container pt-5'>
      <div className='row mb-6'>
        <div className='col-md-8 order-md-2 col-lg-9'>
          {/* <!--  --> */}
          <div className='container-fluid'>
            {/* Rendered Products */}
            <div className='row'>
              {renderedResults.length > 0 ? (
                renderedResults
              ) : (
                <h2 className='fw-bolder mb-4'>No items found</h2>
              )}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
