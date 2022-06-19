import './filter-radio.styles.scss';

const FilterRadio = ({data, setActiveFilter, isChecked, setIsChecked}) => {

    const handleChange = (event) => {
      const { id, checked, value } = event.target;
      setActiveFilter(event.target.value);
      setIsChecked(id);     
    };

    return (
      <div className="radio-list">          
          {Object.keys(data).map((typeKey) => (
            <span key={typeKey} className="radio-group">
              <label className="radio-wrapper">{typeKey}
              <input  
                id={typeKey} 
                type="radio" 
                name="product_type"
                checked={isChecked.includes(typeKey)} 
                value={data[typeKey]} 
                onChange={(event) => handleChange(event)} />
                <span className="circle-icon"></span>
              </label>
            </ span>   
          ))}
      </div>  
    )
}

export default FilterRadio;