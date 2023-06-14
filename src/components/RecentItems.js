import ProductCard from './ProductCard';
import { useContext } from 'react';
import ProductContext from './../context/products';

function RecentItems() {
  const { products } = useContext(ProductContext);

  const recentProducts = products.slice(-4).map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <div className='py-5 bg-light'>
      <div className='container px-4 px-lg-5 mt-5'>
        <h2 className='fw-bolder mb-4'>Recently added</h2>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {/*  */}
          {recentProducts}
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default RecentItems;
