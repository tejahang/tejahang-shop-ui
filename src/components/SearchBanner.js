import { useContext, useState } from 'react';
import ProductContext from '../context/products';
import { useNavigate } from 'react-router-dom';

function SearchBanner() {
  const { getSearchResults } = useContext(ProductContext);

  const [searchItem, setSearchItem] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchItem(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // navigate(`/search/${product.id}`);
    getSearchResults(searchItem);
    navigate(`/search/`);
  };

  return (
    <div className='bg-info py-5'>
      <header className='bg-info py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>Search a product</h1>

            {/* search item */}
            <form
              onSubmit={handleSubmit}
              className='form-subscribe'
              id='contactFormFooter'
              data-sb-form-api-token='API_TOKEN'
            >
              {/* Email address input */}
              <div className='row'>
                <div className='col'>
                  <input
                    onChange={handleChange}
                    className='form-control form-control-lg'
                    id='emailAddressBelow'
                    type='text'
                    placeholder='search..'
                    data-sb-validations='required,email'
                  />
                </div>
                <div className='col-auto'>
                  <button
                    className='btn btn-primary btn-lg'
                    id='submitButton'
                    type='submit'
                  >
                    <i className='bi bi-search'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default SearchBanner;
