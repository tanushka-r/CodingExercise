import { useState, useMemo, useEffect } from 'react';

import ProductList from '../product-list/product-list.component';
import FilterDropdown from '../filter-dropdown/filter-dropdown.component';
import SearchInput from '../search-input/search-input.component';
import FilterRadio from '../filter-radio/filter-radio.component';
import ActionLink from '../action-link/action-link.component';

import './filterable-content.styles.scss';

const FilterableContent = () => {

  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [genres, setGenres] = useState([]);
  const [genresSelection, setGenresSelection] = useState({});
  const [years, setYears] = useState([]);
  const [yearsSelection, setYearsSelection] = useState([]);
  const [productTypes, setProductTypes] = useState({'Movies': 'movie', 'Books': 'book'});
  const [productTypeSelection, setProducTypeSelection] = useState('');
  const [isGenreChecked, setIsGenreChecked] = useState([]);
  const [isYearChecked, setIsYearChecked] = useState([]);
  const [isProductTypeSelected, setIsProductTypeSelected] = useState('');

  const getProductsData = async () => {
    try {
      const responseData = await fetch('https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json');
      const json = await responseData.json();
      setProducts(sortByTitleIgnoreCase(json.media));
      setGenres(getGenres(json.media));
      setYears(getYears(json.media));
    } catch(error) {
      console.log("There was an error: " + error);
    }
  }

  useEffect(() => {
    getProductsData()
  }, []);

  const sortByTitleIgnoreCase = (arr) => {
    let sorttedArr = [...arr].sort((a, b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return sorttedArr;
  }

  const sortAscending = (arr) => {
    let sortedArr = [...arr].sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return sortedArr;
  }

  const getGenres = (products) => {
    let allGenres = new Set();

    products.forEach((product) => {
      product.genre.forEach((genre) => {
        allGenres.add(genre);
      })
    });

    return sortAscending(allGenres);
  }

  const getYears = (products) => {
    let allYears = new Set();

    products.forEach((product) => {
        allYears.add(product.year);
    });

    return sortAscending(allYears);
  }

  const filteredProducts = useMemo(() => {
    const hasGenreFilter = Object.values(genresSelection).includes(true);
    const hasYearFilter = Object.values(yearsSelection).includes(true);
    const hasProductTypeFilter = Object.values(productTypeSelection).length > 0;

    const matchesGenres = (product) => {
      if (hasGenreFilter) {
        return product.genre.some(
          (genre) => genresSelection[genre] === true
        );
      } else return true;
    };

    const matchesYears = (product) => {
      if (hasYearFilter) {
        return yearsSelection[product.year] === true;  
      } else return true;
    };

    const matchesProductType = (product) => {
      if(hasProductTypeFilter) {
        return productTypeSelection == product.type;
      } else return true;
    }

    const matchesSearch = (product) => {
      return product.title.includes(searchField);
    }

    return products
      .filter(matchesSearch)
      .filter(matchesGenres)
      .filter(matchesYears)
      .filter(matchesProductType);
  }, [products, searchField, genresSelection, yearsSelection, productTypeSelection]);

  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value;             
    setSearchField(searchFieldValue);
  }

  const onClearFilters = () => {
    setSearchField('');
    setGenresSelection([]);
    setYearsSelection([]);
    setProducTypeSelection('');
    setIsGenreChecked([]);
    setIsYearChecked([]);
    setIsProductTypeSelected('');    
  };

  return (
    <div role="container" title="exercise two" className="container-main">
      <div className="filters-container">
        <div className="filters-top-section">
          <div className="right-side">
            <FilterDropdown data={genres} setActiveFilter={setGenresSelection} activeFilter={genresSelection} title="Genre" isChecked={isGenreChecked} setIsChecked={setIsGenreChecked} />
            <FilterDropdown data={years} setActiveFilter={setYearsSelection} activeFilter={yearsSelection} title="Year" isChecked={isYearChecked} setIsChecked={setIsYearChecked} />
          </div>
          <div className="left-side">
            <SearchInput onChangeHandler={onSearchChange} searchFieldValue={searchField} />
          </div>   
        </div>
        <div className="filters-bottom-section">
          <FilterRadio data={productTypes} setActiveFilter={setProducTypeSelection} isChecked={isProductTypeSelected} setIsChecked={setIsProductTypeSelected} />
          <ActionLink onClickHandler={onClearFilters} label="Clear Filters" />
        </div>
      </div>
      <ProductList products={filteredProducts} setProducts={setProducts} />
    </div>
  );
};

export default FilterableContent;
