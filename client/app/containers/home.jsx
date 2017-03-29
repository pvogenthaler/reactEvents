import React from 'react';
import {EventsList} from './../components/eventsList.jsx';

class Home extends React.Component {
  render() {
    return (
      <EventsList />
    );
  }
}

module.exports.Home = Home;
