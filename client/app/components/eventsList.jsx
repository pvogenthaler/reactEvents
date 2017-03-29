import React from 'react';
import axios from 'axios';
import {Event} from './event.jsx';
import {AddEvent} from './addEvent.jsx';

class EventsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      displayEvents: []
    }
    this.sortDate = this.sortDate.bind(this);
    this.sortCity = this.sortCity.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
  }

  sortDate() {
    let months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    }
    let newSort = this.state.displayEvents.sort((a, b) => {
      let aArr = a.date.split(' '), bArr = b.date.split(' ');
      if (aArr[2] < bArr[2]) {
        return -1;
      } else if (aArr[2] > bArr[2]) {
        return 1;
      } else if (months[aArr[0]] < months[bArr[0]]) {
        return -1;
      } else if (months[aArr[0]] > months[bArr[0]]) {
        return 1;
      } else if (aArr[1].slice(1, -1) < bArr[1].slice(1, -1)) {
        return 1;
      } else if (aArr[1].slice(1, -1) > bArr[1].slice(1, -1))
      return 0;
    });
    this.setState({
      displayEvents: newSort
    });
  }

  sortCity() {
    let newSort = this.state.displayEvents.sort((a, b) => {
      if (a.city < b.city)
        return -1;
      if (a.city > b.city)
        return 1;
      return 0;
    });
    this.setState({
      displayEvents: newSort
    });
  }

  updateEvents(newEvents) {
    this.setState({
      displayEvents: newEvents
    });
  }

  componentDidMount() {
    axios.get('/events')
    .then((res) => {
      console.log('events res: ', res.data.events);
      this.setState({
        events: res.data.events,
        displayEvents: res.data.events
      });
    })
    .catch((err) => {
      console.log('error on getting events: ', err);
    });
  }

  render() {
    console.log('rendering', this.state.events);
    return (
      <div>
        <h2> Events List </h2>
        <button onClick={this.sortDate}> date </button>
        <button onClick={this.sortCity}> city </button>
        <ul>
          {this.state.displayEvents.map((event, i) => {
            return (
              <Event key={i} id={i} event={event} callback={this.updateEvents} />
            );
          })}
        </ul>
        <AddEvent callback={this.updateEvents}/>
      </div>
    );
  }

}

module.exports.EventsList = EventsList;
