import { useState, useEffect } from 'react';
import { Fragment } from 'react';

import ProductList from './components/product-list/product-list.component';
import SearchInput from './components/search-input/search-input.component';

const App = () => {

  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState([]);

  const getProductsData = async () => {
    try {
      const responseData = await fetch('https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json');
      const json = await responseData.json();
      setProducts(json.media);
    } catch(error) {
      console.log("There was an error: " + error);
    }
  }

  useEffect(() => {
    getProductsData()
  }, []);

  onSearchChange = (event) => {
    const searchFieldValue = event.target.value;             
    setSearchField(searchFieldValue);
  }

  const filteredProducts = products.filter((product) => {
    return product.title.includes(searchField);
  });

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
        <SearchInput onChangeHandler={onSearchChange} />
        <ProductList products={filteredProducts} />
      </div>
    </Fragment>
  );
};

export default App;
