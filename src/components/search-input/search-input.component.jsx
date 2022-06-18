import './search-input.styles.scss';

const SearchInput = ({onChangeHandler, searchFieldValue}) => {
    return (
      <input 
          type="search" 
          value={searchFieldValue}
          onChange={onChangeHandler} />
    )
}

export default SearchInput;