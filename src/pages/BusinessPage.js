import './../assets/cart.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BusinessList from '../components/BusinessList';
import { useContext, useEffect } from 'react';
import ProductContext from '../context/products';

function BusinessPage() {
  const { getTransactionList } = useContext(ProductContext);

  useEffect(() => {
    getTransactionList();
  }, []);

  return (
    <div>
      <Navbar />
      <BusinessList />
      <Footer />
    </div>
  );
}

export default BusinessPage;
