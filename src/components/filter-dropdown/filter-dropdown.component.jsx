import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './filter-dropdown.styles.scss';

const FilterDropdown = ({data, setActiveFilter, selectionCount, placeholder}) => {

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
            <label className="dropdown-label" onClick={toggleListHandler}>{placeholder}</label>
            <ul className="dropdown-list">
                {data.map((item, index) => (
                    <li key={index} className="dropdown-option">
                        <input 
                            type="checkbox" 
                            name="dropdown-group" 
                            value={item} 
                            onChange={(event) => handleChange(event, item)} />
                        {item}
                    </li>
                ))}
            </ul>
	    </div>
    )
}

export default FilterDropdown;