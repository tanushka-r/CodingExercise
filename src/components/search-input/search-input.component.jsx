import './search-input.styles.scss';

const SearchInput = ({onChangeHandler}) => {
    return (
      <input 
          type="search" 
          onChange={onChangeHandler} />
    )
}

export default SearchInput;