import React from 'react';
import {render} from 'react-dom';
import {Home} from './containers/home.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Event Mangaer </h1>
        <Home />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
