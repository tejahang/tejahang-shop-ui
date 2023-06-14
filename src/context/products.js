import axios from 'axios';
import { createContext, useCallback, useState } from 'react';

// 1. context object
const ProductContext = createContext();

// 2. top provider
function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResult] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // 1. Fetch Books
  const fetchProducts = useCallback(async () => {
    const response = await axios.get('http://localhost:5000/api/products', {
      withCredentials: true,
    });

    setProducts(response.data.product);
    // console.log(response.data.user);
    setCurrentUser(response.data.user);
  }, []);

  // 2. Get categories
  const getCategories = useCallback(async () => {
    const response = await axios.get(
      'http://localhost:5000/api/products/categories',
      {
        withCredentials: true,
      }
    );

    setCategories(response.data);
  }, []);

  // 2. Get categories
  const getSearchResults = useCallback(async (searchItem) => {
    const response = await axios.post(
      'http://localhost:5000/api/products/search',
      { searchItem: searchItem },
      { withCredentials: true }
    );

    setSearchResult(response.data);
  }, []);

  // 3. Login
  const login = async (email, password) => {
    const response = await axios.post(
      'http://localhost:5000/api/users/login',
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    setCurrentUser(response.data.user.firstname);
    return response;
  };

  // 4. Cart
  const cart = async (user_id, product_id) => {
    const response = await axios.post(
      'http://localhost:5000/api/products/cart',
      {
        user_id,
        product_id,
      },
      { withCredentials: true }
    );

    return response;
  };

  // 5. Authneticated

  // To share
  const toShare = {
    fetchProducts,
    products,
    setProducts,
    getCategories,
    categories,
    getSearchResults,
    searchResults,
    setSearchResult,
    login,
    cart,
    setCurrentUser,
    currentUser,
  };

  return (
    <ProductContext.Provider value={toShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;