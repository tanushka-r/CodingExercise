import { useState, useMemo, useEffect } from 'react';
import { Fragment } from 'react';

import ProductFilters from './components/product-filters/product-filters.component';
import ProductList from './components/product-list/product-list.component';
import FilterDropdown from './components/filter-dropdown/filter-dropdown.component';
import SearchInput from './components/search-input/search-input.component';
import FilterRadio from './components/filter-radio/filter-radio.component';

const App = () => {

  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [genres, setGenres] = useState([]);
  const [genresSelection, setGenresSelection] = useState([]);
  const [years, setYears] = useState([]);
  const [yearsSelection, setYearsSelection] = useState([]);
  const [productTypes, setProductTypes] = useState({'Movies': 'movie', 'Books': 'book'});
  const [productTypeSelection, setProducTypeSelection] = useState('');

  const [isChecked, setIsChecked] = useState([]);
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

  // may need better name... it is sorting strings alphabetically and numbers in asc order
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

    return products
      .filter((product) =>
        product.title.includes(searchField)
      )
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
    setIsChecked([]);
    setIsRadioSelected('');
  };

  return (
    <Fragment>
      <div className="exercise-header">
        <h2>Exercise 1 - Testimonial Block</h2>
      </div>
      <div>
        <div>
          <div>
            <p>Gingerbread tart cupcake cake muffin cookie liquorice tiramisu. Toffee cupcake cake cake croissant icing carrot cake cookie. Dessert chocolate bar apple pie sesame snaps liquorice carrot cake cookie danish.</p>
            <span>Indiana Jones, Archaeologist</span>
          </div>
          <a>Tell Me More</a>
        </div>
      </div>
      <div className="exercise-header">
        <h2>Exercise 2 - Filterable Content</h2>
      </div>
      <div className="container-main">
        <div className="filters-container">
          <div className="filters-top-section">
            <div className="filters-dropdown">
              <FilterDropdown data={genres} setActiveFilter={setGenresSelection} selectionCount={genresSelection.length} placeholder="Genre" isChecked={isChecked} setIsChecked={setIsChecked} />
              <FilterDropdown data={years} setActiveFilter={setYearsSelection} selectionCount={yearsSelection.length} placeholder="Year" isChecked={isChecked} setIsChecked={setIsChecked} />
            </div>
            <div>
              <SearchInput onChangeHandler={onSearchChange} searchFieldValue={searchField} />
            </div>   
          </div>
          <div className="filters-bottom-section">
            <FilterRadio data={productTypes} setActiveFilter={setProducTypeSelection} isChecked={isRadioSelected} setIsChecked={setIsRadioSelected} />
            <button id="button_clearFilters" onClick={onClearFilters}>Clear Filters</button>
          </div>
          
          {/* <ProductFilters  onSearchChange={onSearchChange} /> */}
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </Fragment>
  );
};

export default App;
