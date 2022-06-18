import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import './filter-dropdown.styles.scss';

const FilterDropdown = ({data, setActiveFilter, activeFilter, placeholder, isChecked, setIsChecked}) => {

    const [placeholderText, setPlaceholderText] = useState(placeholder);

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

    useEffect(() => setPlaceholder(), [isChecked]);

    const setPlaceholder = () => {
        setPlaceholderText(isChecked.length > 1 ? isChecked.length + " " + placeholder + "s" : placeholder);
    }

    return (
        <div className='dropdown'>
            <label className="dropdown-label" onClick={toggleListHandler}>{placeholderText}</label>
            <ul className="dropdown-list">
                {data.map((item, index) => (
                    <li key={index} className="dropdown-option">
                        <label className="checkbox-wrapper">{item}
                            <input
                                id={placeholder+""+index}
                                type="checkbox" 
                                name="dropdown-group"
                                checked={isChecked.includes(placeholder+""+index)}
                                value={item} 
                                onChange={(event) => handleChange(event, item)} />
                            <span class="check-icon"></span>
                        </label>

                        {/* <label class="container">One
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label> */}
                    </li>
                ))}
            </ul>
	    </div>
    )
}

export default FilterDropdown;