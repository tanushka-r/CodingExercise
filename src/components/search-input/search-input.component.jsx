import './search-input.styles.scss';

const SearchInput = ({onChangeHandler, searchFieldValue}) => {
    return (
      <input 
          value={searchFieldValue}
          onChange={onChangeHandler} />
    )
}

export default SearchInput;