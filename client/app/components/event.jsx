import React from 'react';
import axios from 'axios';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.event.name,
      date: this.props.event.date,
      location: this.props.event.city + ', ' + this.props.event.state,
      venue: this.props.event.venue
    }
    this.editEvent = this.editEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  editEvent(e) {
    // make ajax post req
    e.preventDefault();
  }

  updateEvent(e) {
    this.setState({
      [e.target.dataset.kind]: e.target.value
    });
  }

  deleteEvent(e) {
    axios.delete('/events?id=' + this.props.id)
    .then((res) => {
      console.log('res.data.events', res.data.events)
      this.props.callback(res.data.events);
    })
    .catch((err) => {
      console.log('error on deleting event')
    });
  }

  render() {
    return (
      <li>
        <h3 onClick={this.editEvent}>Name: {this.props.event.name}</h3>
        <p>Date: {this.props.event.date}</p>
        <p>Location: {this.props.event.city}, {this.props.event.state}</p>
        <p>Venue: {this.props.event.venue}</p>
        <button onClick={this.deleteEvent}>delete</button>
        <button>edit</button>
        {/* <form style={{display: 'none'}}>
          <label> <h3>Edit:</h3> </label>
          <label>Name: </label> <br />
          <input type="text" data-kind="name" onChange={this.updateEvent} value={this.state.name}></input> <br />
          <label>Date: </label> <br />
          <input kind="text" data-kind="date" onChange={this.updateEvent} value={this.state.date}></input> <br />
          <label>Location: </label> <br />
          <input kind="text" data-kind="location" onChange={this.updateEvent} value={this.state.location}></input> <br />
          <label>Venue: </label> <br />
          <input kind="text" data-kind="venue" onChange={this.updateEvent} value={this.state.venue}></input> <br />
          <button onClick={this.editEvent}>Submit</button>
        </form> */}
      </li>
    );
  }

}

module.exports.Event = Event;
