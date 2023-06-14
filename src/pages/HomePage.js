import Navbar from './../components/Navbar';
import SearchBanner from './../components/SearchBanner';
import MidSection from './../components/MidSection';
import RecentItems from './../components/RecentItems';
import Subscribe from './../components/Subscribe';
import Footer from './../components/Footer';
import { useContext, useEffect } from 'react';
import ProductContext from './../context/products';

function HomePage() {
  const { fetchProducts } = useContext(ProductContext);

  // First render and on change
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBanner />
      <MidSection />
      <RecentItems />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default HomePage;
