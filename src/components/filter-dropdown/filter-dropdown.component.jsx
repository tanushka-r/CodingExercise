import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './filter-dropdown.styles.scss';

const FilterDropdown = ({data, setActiveFilter}) => {
    
    const toggleListHandler = (event) => {
        event.target.parentElement.classList.toggle('on');
    }

    const handleChange = (event, item)  => {
        setActiveFilter((prev) => ({
          ...prev,
          [item]: event.target.checked
        }));
      };

    return (
        <div className='dropdown'>
            <label className="dropdown-label" onClick={toggleListHandler}>Select</label>
            <div className="dropdown-list">
                {data.map((item, index) => (
                    <label key={index} className="dropdown-option">
                        <input 
                            type="checkbox" 
                            name="dropdown-group" 
                            value={item} 
                            onChange={(event) => handleChange(event, item)} />
                        {item}
                    </label>
                ))}
            </div>
	    </div>
    )
}

export default FilterDropdown;