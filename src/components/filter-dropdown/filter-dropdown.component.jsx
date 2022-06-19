import { useState, useEffect } from 'react';

import './filter-dropdown.styles.scss';

const FilterDropdown = ({data, setActiveFilter, title, isChecked, setIsChecked}) => {

    const [titleText, setTitleText] = useState(title);

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

    useEffect(() => setTitle(), [isChecked]);

    const setTitle = () => {
        setTitleText(isChecked.length > 1 ? isChecked.length + " " + title + "s" : title);
    }

    return (
        <div className='dropdown'>
            <label className="dropdown-label">{titleText}</label>
            <ul className="dropdown-list">
                {data.map((item, index) => (
                    <li key={index} className="dropdown-option">
                        <label className="checkbox-wrapper">{item}
                            <input
                                id={title + "" + index}
                                type="checkbox" 
                                name="dropdown-group"
                                checked={isChecked.includes(title + "" + index)}
                                value={item} 
                                onChange={(event) => handleChange(event, item)} />
                            <span className="check-icon"></span>
                        </label>
                    </li>
                ))}
            </ul>
	    </div>
    )
}

export default FilterDropdown;