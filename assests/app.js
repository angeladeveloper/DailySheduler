// 'strict'
// {
//   name: '5 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// },
const hourTemplate = document.getElementById('hourTemplate')

// const moment = require("../lib/moment.js/moment")


let hourArray = [
  {
    name: '5 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  },
  {
    name: '6 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '7 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '8 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '9 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '10 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '11 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '12 AM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '1 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '2 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '3 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '4 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '5 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '6 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '7 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '8 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '9 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '10 PM',
    time: 0500,
    priority: ['low', 'normal', 'high']
  }


]

//current date
let m = moment();

function renderHours() {
  hourArray.forEach(time => {

  });
}


// // current date and time
// console.log('Time:', m);
// console.log(m.toString());
// // Create from ISO 8601 string

// m = moment('2019-05-19T22:34:00');

// console.log(`New time: ${m.toString()}`);

// m = moment('14/06/2019 4:50PM', "Do/MM/YYYY h:mmA");

// console.log(`New time formatted: ${m.toString()}`);

// m = moment(600000);

// console.log(`EPOCH: ${m.toString()}`);
// console.log(`EPOCH: ${m.toISOString()}`);

// m = moment.unix(7200)
// console.log(`EPOCH seconds: ${m.toString()}`);

// m = moment.utc()

// console.log(`UTC: ${m.toString()}`);
// console.log(`UTCStand : ${m.toISOString()}`);
// // function renderHours() {
//   hourArray.forEach(hour => {
//     console.log('hi!', hour);

//   });
// 

// console.log('Current Time:', m.toString());
// console.log('Mins:', m.minutes());

// m.minutes(52);

// console.log('adjusted', m.toString());


console.log(`Original: ${m.toString()}`);
// add 

// m.add(4, 'hours').add(15, 'm');

m.add({
  hour: 2,
  minutes: 43,
})



console.log(`After: ${m.toString()}`);

