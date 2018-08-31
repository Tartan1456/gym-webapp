import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../components/home';

require('../../../global.scss');

class HomeContainer extends React.Component {
  render () {
    return (
      <Home />
    )
  }
}

export default HomeContainer;

ReactDOM.render(<HomeContainer />, document.getElementById('react-home'));
