import { useContext, useEffect } from 'react';
import ProductContext from './context/products';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SingleProductPage from './pages/SingleProductPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { fetchProducts, getCategories } = useContext(ProductContext); // consuming context

  // load at initial and on change
  useEffect(() => {
    fetchProducts();
    getCategories();
  }, [fetchProducts, getCategories]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/logout' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
