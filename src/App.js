import { useState, useMemo, useEffect } from 'react';
import { Fragment } from 'react';

import ProductFilters from './components/product-filters/product-filters.component';
import ProductList from './components/product-list/product-list.component';
import FilterDropdown from './components/filter-dropdown/filter-dropdown.component';
import SearchInput from './components/search-input/search-input.component';
import FilterRadio from './components/filter-radio/filter-radio.component';

import ExerciseHeader from './components/exercise-header/exercise-header.component';
import TestimonialBlock from './components/testimonial-block/testimonial-block.component';

// import "./styles/_commonVariables.scss";

const App = () => {

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
  const [isRadioSelected, setIsRadioSelected] = useState('');

  const getProductsData = async () => {
    try {
      const responseData = await fetch('https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json');
      const json = await responseData.json();
      setProducts(sortProductsByTitle(json.media));
      setGenres(getGenres(json.media));
      setYears(getYears(json.media));
    } catch(error) {
      console.log("There was an error: " + error);
    }
  }

  useEffect(() => {
    getProductsData()
  }, []);

  const sortProductsByTitle = (products, title) => {
    let sortedProducts = [...products].sort((a, b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return sortedProducts;
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

  const onClearFilters = (event) => {
    setSearchField('');
    setGenresSelection([]);
    setYearsSelection([]);
    setProducTypeSelection('');
    setIsGenreChecked([]);
    setIsYearChecked([]);
    setIsRadioSelected('');    
  };

  return (
    <Fragment>
      <ExerciseHeader headerText="Exercise 1 - Testimonial Block" />
      <TestimonialBlock />
      <ExerciseHeader headerText="Exercise 2 - Filterable Content" />
      <div className="container-main">
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
            <FilterRadio data={productTypes} setActiveFilter={setProducTypeSelection} isChecked={isRadioSelected} setIsChecked={setIsRadioSelected} />
            <button id="button_clearFilters" className="action-link" onClick={onClearFilters}>Clear Filters</button>
          </div>
          
          {/* <ProductFilters  onSearchChange={onSearchChange} /> */}
        </div>
        <ProductList products={filteredProducts} setProducts={setProducts} />
      </div>
    </Fragment>
  );
};

export default App;
