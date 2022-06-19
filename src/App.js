import { Fragment } from 'react';

import ExerciseHeader from './components/exercise-header/exercise-header.component';
import TestimonialBlock from './components/testimonial-block/testimonial-block.component';
import FilterableContent from './components/filterable-content/filterable-content.component';

const App = () => {
  return (
    <Fragment>
      <ExerciseHeader headerText="Exercise 1 - Testimonial Block" />
      <TestimonialBlock />
      <ExerciseHeader headerText="Exercise 2 - Filterable Content" />
      <FilterableContent />
    </Fragment>
  );
};

export default App;
