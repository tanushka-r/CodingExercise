import './search-input.styles.scss';

const SearchInput = ({onChangeHandler, searchFieldValue}) => {
    return (
        <div className="search-wrapper">
            <input 
            className="search-input"
            value={searchFieldValue}
            onChange={onChangeHandler} />
            <i className="search-icon"></i>
        </div>
    )
}

export default SearchInput;