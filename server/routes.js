const express = require('express');
const router = express.Router();

let events = [
  {
    name: 'Red Hot Chili Peppers',
    date: 'May 1, 2017',
    venue: 'Bill Graham',
    city: 'San Francisco',
    state:  'CA'
  },
  {
    name: 'Beyonce',
    date: 'June 5, 2016',
    venue: 'Oracle',
    city: 'Oakland',
    state:  'CA'
  },
  {
    name: 'Coldplay',
    date: 'July 10, 2018',
    venue: 'Wrigley Field',
    city: 'Chicago',
    state:  'IL'
  }
];

router.get('/', (req, res) => {
  res.send({
    events: events
  });
});

router.delete('/', (req, res) => {
  events.splice(req.query.id, 1);
  console.log('deleted', events);
  res.send({
    events: events
  });
});

router.post('/', (req, res) => {
  console.log(req.body)
  events.push(req.body);
  res.send({
    events: events
  });
});

module.exports = router;
