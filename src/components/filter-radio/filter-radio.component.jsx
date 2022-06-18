import { useState } from 'react';

import './filter-radio.styles.scss';

const FilterRadio = ({data, setActiveFilter, activeFilter}) => {

    const handleChange = (event)  => {
      setActiveFilter(event.target.value);
    };

    return (
      <div className="radio-list">          
          {Object.keys(data).map((typeKey) => (
            <span key={typeKey} className="radio-group">
              <input  id={typeKey} type="radio" name="product_type" value={data[typeKey]} onChange={(event) => handleChange(event)} />
              <label htmlFor={typeKey}>{typeKey}</label>
            </ span>                  
          ))}
      </div>  
    )
}

export default FilterRadio;