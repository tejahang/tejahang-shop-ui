import { useContext, useState } from 'react';
import ProductContext from '../context/products';

function ListItem({ category, setCatoProduct }) {
  const { products } = useContext(ProductContext);

  // console.log(search_items);

  const handleClick = () => {
    const updated_for_cato = products.filter(
      (prod) => prod.category === category
    );
    setCatoProduct(updated_for_cato);
  };

  return (
    <li className='list-group-item'>
      <a href='#' onClick={handleClick} style={{ cursor: 'pointer' }}>
        {category}
      </a>
    </li>
  );
}

export default ListItem;
