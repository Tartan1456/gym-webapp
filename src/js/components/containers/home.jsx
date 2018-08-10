import React from 'react';
import ReactDOM from 'react-dom';

class HomeContainer extends React.Component {
  render () {
    return (
      <h1>Smash it</h1>
    )
  }
}

export default HomeContainer;

ReactDOM.render(<HomeContainer />, document.getElementById('react-home'));
