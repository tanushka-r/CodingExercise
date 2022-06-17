import { useState } from 'react';

import './filter-radio.styles.scss';

const FilterRadio = ({productTypes, setActiveFilter, activeFilter}) => {

    const handleChange = (event)  => {
        console.log(activeFilter);
        setActiveFilter(event.target.value);
      };

    return (
      <div className="radio-list">          
          {Object.keys(productTypes).map((typeKey) => (
            <div key={typeKey} className="radio-group">
              <input  id={typeKey} type="radio" name="product_type" value={productTypes[typeKey]} onChange={(event) => handleChange(event)} />
              <label htmlFor={typeKey}>{typeKey}</label>
            </ div>                  
          ))}
      </div>  

    )
}

export default FilterRadio;