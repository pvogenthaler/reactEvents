import React from 'react';
import axios from 'axios';

class AddEvent extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      location: '',
      venue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.dataset.kind]: e.target.value
    });
  }

  submitEvent(e) {
    e.preventDefault();
    let location = this.state.location.split(', ');
    axios.post('/events', {
      name: this.state.name,
      date: this.state.date,
      city: location[0],
      state: location[1],
      venue: this.state.venue
    })
    .then((res) => {
      console.log('res.date', res.data);
      this.props.callback(res.data.events);
      for (let item in this.state) {
        this.setState({
          [item]: ''
        });
      }
    })
    .catch((err) => {
      console.log('error on posting new event')
    });
  }

  render() {
    return (
      <form>
        <label> <h3>Edit:</h3> </label>
        <label>Name: </label> <br />
        <input type="text" data-kind="name" onChange={this.onChange} value={this.state.name}></input> <br />
        <label>Date: </label> <br />
        <input kind="text" data-kind="date" onChange={this.onChange} value={this.state.date}></input> <br />
        <label>Location: </label> <br />
        <input kind="text" data-kind="location" onChange={this.onChange} value={this.state.location}></input> <br />
        <label>Venue: </label> <br />
        <input kind="text" data-kind="venue" onChange={this.onChange} value={this.state.venue}></input> <br />
        <button onClick={this.submitEvent}>Submit</button>
      </form>
    )
  }

}

module.exports.AddEvent = AddEvent;
