import { useState, useMemo, useEffect } from 'react';
import { Fragment } from 'react';

import Multiselect from "multiselect-react-dropdown";

import ProductFilters from './components/product-filters/product-filters.component';
import ProductList from './components/product-list/product-list.component';
import FilterDropdown from './components/filter-dropdown/filter-dropdown.component';

const App = () => {

  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genresSelection, setGenresSelection] = useState([]);
  // const [activeFilter, setActiveFilter] = useState([]);

  const getProductsData = async () => {
    try {
      const responseData = await fetch('https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json');
      const json = await responseData.json();
      setProducts(sortProductsByTitle(json.media));
      setGenres(getGenres(json.media));
    } catch(error) {
      console.log("There was an error: " + error);
    }
  }

  useEffect(() => {
    getProductsData()
  }, []);

  const sortProductsByTitle = (products) => {
    let sortedProducts = products.slice(0);
    
    sortedProducts.sort((a, b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return sortedProducts;
  }

  const getGenres = (products) => {
    let allGenres = new Set();
    let sortedGenres;

    products.forEach((product) => {
      product.genre.forEach((genre) => {
        allGenres.add(genre);
      })
    });

    sortedGenres = [...allGenres].sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return sortedGenres;
  }

  const filteredProducts= useMemo(() => {
    const hasCategoryFilter = Object.values(genresSelection).includes(true);

    const matchesCategories = (product) => {
      if (hasCategoryFilter) {
        return product.genre.some(
          (genre) => genresSelection[genre] === true
        );
      } else return true;
    };

    return products
      .filter((product) =>
        product.title.includes(searchField)
      )
      .filter(matchesCategories);
  }, [products, searchField, genresSelection]);

  onSearchChange = (event) => {
    const searchFieldValue = event.target.value;             
    setSearchField(searchFieldValue);
  }

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
        {console.log('render')}
        <FilterDropdown data={genres} currentSelection={genresSelection} setActiveFilter={setGenresSelection} activeFilter={genresSelection} />
        <ProductFilters  onSearchChange={onSearchChange} />
        <ProductList products={filteredProducts} />
      </div>
    </Fragment>
  );
};

export default App;
