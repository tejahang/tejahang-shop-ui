import ProductCard from './ProductCard';
import ListItem from './ListItem';
import { useContext, useState, useEffect } from 'react';
import ProductContext from './../context/products';

function MidSection() {
  const { products, categories } = useContext(ProductContext);
  const [CatoProduct, setCatoProduct] = useState(products);

  useEffect(() => {
    if (products !== undefined && products.length > 0) {
      setCatoProduct(products);
    }
  }, [products]);

  const renderedProducts = CatoProduct.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderedCategories = categories.map((cat) => {
    return (
      <ListItem
        key={cat.id}
        category={cat.category_name}
        setCatoProduct={setCatoProduct}
      />
    );
  });

  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-md-8 order-md-2 col-lg-9'>
          {/* <!--  --> */}
          <div className='container-fluid'>
            {/* Rendered Products */}
            <div className='row'>
              {renderedProducts.length > 0 ? (
                renderedProducts
              ) : (
                <h2 className='fw-bolder mb-4'>No items found</h2>
              )}
            </div>
            {/* <div className='row'>
              {renderedProducts}
              </div> */}
            {/*  */}
          </div>
        </div>

        <div className='col-md-4 order-md-1 col-lg-3 sidebar-filter'>
          <h6 className='text-uppercase font-weight-bold mb-3'>Categories</h6>
          <ul className='list-group'>
            {/* Categories List */}
            {renderedCategories}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
