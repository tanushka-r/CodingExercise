import { useState } from 'react';

import './filter-radio.styles.scss';

const FilterRadio = ({data, setActiveFilter, activeFilter, isChecked, setIsChecked}) => {

    const handleChange = (event) => {
      const { id, checked, value } = event.target;
      setActiveFilter(event.target.value);
      setIsChecked(id);     
    };

    return (
      <div className="radio-list">          
          {Object.keys(data).map((typeKey) => (
            <span key={typeKey} className="radio-group">
              <input  
                id={typeKey} 
                type="radio" 
                name="product_type"
                checked={isChecked.includes(typeKey)} 
                value={data[typeKey]} 
                onChange={(event) => handleChange(event)} />
              <label htmlFor={typeKey}>{typeKey}</label>
            </ span>                  
          ))}
      </div>  
    )
}

export default FilterRadio;