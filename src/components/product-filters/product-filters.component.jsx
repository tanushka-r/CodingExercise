
import SearchInput from '../search-input/search-input.component';


import './product-filters.styles.scss';

const ProductFilters = ({onSearchChange}) => {
  return (
    <div className='filters-container'>
      
      <SearchInput onChangeHandler={onSearchChange} />
    </div>
  );
};

export default ProductFilters;
