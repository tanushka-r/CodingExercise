import { v4 as uuid } from 'uuid';
import ProductCard from '../../components/product-card/product-card.component';

import './product-list.styles.scss';

const ProductList = ({products}) => {
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={uuid()} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
