'strict'
clock();

const hourTemplate = document.getElementById('hourTemplate')
const hourList = document.getElementById('hourList')
const clockEl = document.querySelector('#currentDay')
const hourBlockElement = document.querySelector('.hourBlocks')
// const moment = require("../lib/moment.js/moment")




let hourArray = [ // not entire array yet. 
  {
    name: '5 AM',
    time: '0500',
    task: 'Wake up',
    priority: ['low', 'normal', 'high']
  },
  {
    name: '6 AM',
    time: '0600',
    task: '',
    priority: ['low', 'normal', 'high']
  }
  ,
  {
    name: '7 AM',
    time: '0700',
    task: '',
    priority: ['low', 'normal', 'high']
  }

]
let currentIndex =0;
let dayStartHour = 5;
let m = moment().hour()
 // current time
// let startOfDay = moment().startOf('day') // start of current day
// let hourBlock = moment(startOfDay).add(5, "hours").format("hh:mm");



// console.log('time of Day', startOfDay);
// console.log(startOfDay.toString());
// console.log('hour block', hourBlock);



function clock() {
  myInterval = setInterval(m => {
    let time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    // console.log('clock', time);
    clockEl.innerText = time;

  },
    1000)
  }

console.log('Current Moment', m);


function setEachHourBlock(){
  hourArray.forEach(span => {
    const listElement = document.createElement('li');
    listElement.classList.add("hourBlocks");
    hourList.appendChild(listElement);

    const divElement = document.createElement('div')
    divElement.classList.add("input-group", "template", "col");
    listElement.appendChild(divElement);

    const spanElement = document.createElement('span');
    spanElement.classList.add("input-group-text");
    spanElement.innerText = hourArray[currentIndex].time;
    divElement.appendChild(spanElement)
    // console.log(hourArray[currentIndex].time);

    const inputElement = document.createElement('input');
    inputElement.classList.add("form-control");
    inputElement.setAttribute("type", "text");
    inputElement.dataset.tense = "current";
    spanElement.appendChild(inputElement);

    const saveElement = document.createElement('button');
    saveElement.classList.add("btn", "btn-outline-secondary");
    saveElement.setAttribute("type", "button");
    // saveElement.setAttribute("id", "button-addon2");
    saveElement.innerText = "Save"
    spanElement.appendChild(saveElement);

    let currentMoment = moment().set("hours", currentIndex+dayStartHour).hour();
  console.log(hourArray[currentIndex].time);
  console.log("actualTime",m);
  console.log("SetHour", currentMoment);
    if(m > currentMoment){
      inputElement.dataset.tense = "past"
     inputElement.style.backgroundColor = "red" 
    }else if(m < currentMoment){
      inputElement.dataset.tense = "future"
      inputElement.style.backgroundColor = "green" 
    }else{
      inputElement.dataset.tense = "current"
      inputElement.style.backgroundColor = "none" 
    }

    saveElement.dataset.hourID = currentMoment;
    inputElement.dataset.hourID = currentMoment;

    currentIndex++;
    }

 
  )
  hourList.addEventListener('click', e => {
    e.preventDefault();
    const inputElement = document.querySelector('.form-control');
    const taskName = inputElement.value;
    console.log('Value:', taskName);
    
    if (e.target.tagName.toLowerCase() === 'button'){
      selectedButton = e.target.dataset.hourID;
      console.log("Selected BTN:",selectedButton);
    
      
  }})
};
  setEachHourBlock()


function saveTask(e){
  if (e.target.tagName.toLowerCase() === 'button'){
    selectedButton = e.target.dataset.listId;
    console.log(selectedButton);
// get the object with matching IdleDeadline
let taskInput = document.querySelector('.form-control').value
hourArray[1].task = taskInput
  }

  // let taskInput = document.querySelector('.form-control').value
  console.log("user Value", taskInput);
  
  
}

function changeDesc( time, task ) {
  for (var i in hourArray) {
    if (hourArray[i].time == time) {
      hourArray[i].task = task;
       break; //Stop this loop, we found it!
    }
  }
}


changeDesc(0500, "go to sleep");
















// function setTenseColor(){
//   if(m >= )
// }



// const KEY_HOUR_TASKS = 'task.hour';

// let hourTasks = JSON.parse(localStorage.getItem(KEY_HOUR_TASKS) || '')






















  // function renderHours() {
  //   startOfHour = startOfHour.add(6, 'hours'); // current day at 6am
  //   hourArray.forEach(hour => {
  //     const hourElement = document.importNode(hourTemplate.content, true); // create template
  //     const hourBlock = document.querySelector('span');
  //     console.log(hour.time);
  //     const hourLabel = hour.time;
  //     hourBlock.id = hourLabel;
  //     hourBlock.innerText = `Hour ${hourLabel}`;
  //     hourList.appendChild(hourElement);
  //     console.log(`Hour ${hourLabel}`);
  //     // this is where im getting lost
  //     // hourBlock.innerHTML = hourArray[1]['time'] // does this even work? 
  //   })
  // }
// renderHours()



 // ------ ARRAY/object layout.
// {
//   name: '5 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// },

// {/* <template id="hourTemplate">
// <div class="input-group">
//   <span id="hourBlock" class="input-group-text">12:00-1:00</span>
//   <input type="text" aria-label="First name" class="form-control" />
//   <select class="form-select" aria-label="Default select example">
//     <option selected>Priority</option>
//     <option value="1">Low</option>
//     <option value="2" selected>Normal</option>
//     <option value="3">High</option>
//   </select>
//   <button type="button" class="btn btn-success">Save</button>
// </div>
// </template> */}


 // ---------- REST OF MY ARRAY ----
// {
//   name: '8 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '9 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '10 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '11 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '12 AM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '1 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '2 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '3 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '4 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '5 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '6 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '7 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '8 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '9 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }
// ,
// {
//   name: '10 PM',
//   time: 0500,
//   priority: ['low', 'normal', 'high']
// }