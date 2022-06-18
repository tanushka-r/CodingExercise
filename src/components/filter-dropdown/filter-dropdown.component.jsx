import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './filter-dropdown.styles.scss';

const FilterDropdown = ({data, setActiveFilter, selectionCount, placeholder, isChecked, setIsChecked}) => {

    const toggleListHandler = (event) => {
        event.target.parentElement.classList.toggle('on');
    }

    const handleChange = (event, item)  => {
        const { id, checked } = event.target;
        setActiveFilter((prev) => ({
          ...prev,
          [item]: checked
        }));
        setIsChecked([...isChecked, id]);
        if (!checked) {
          setIsChecked(isChecked.filter((c) => c !== id));
        }
    };

    return (
        <div className='dropdown'>
            <label className="dropdown-label" onClick={toggleListHandler}>{placeholder}</label>
            <ul className="dropdown-list">
                {data.map((item, index) => (
                    <li key={index} className="dropdown-option">
                        <input
                            id={placeholder+""+index}
                            type="checkbox" 
                            name="dropdown-group"
                            checked={isChecked.includes(placeholder+""+index)}
                            value={item} 
                            onChange={(event) => handleChange(event, item)} />
                        <label>{item}</label>
                    </li>
                ))}
            </ul>
	    </div>
    )
}

export default FilterDropdown;