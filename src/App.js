import React, { useState } from 'react';
import './App.css';
import Dates from './Components/Dates';
import Notes from './Components/Notes';

const App = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState('');
    //const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const currentDate = new Date()
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let numberOfDays = new Date(year, month + 1, 0).getDate();
    let firstDayCurrentMonth = new Date(year, month, 1);
    let firstday = days.indexOf(firstDayCurrentMonth.toDateString().split(' ')[0])
    let lastRow = 0;
    let remainderRow = 0;
    
    console.log(numberOfDays - 28 + firstday)
    if (numberOfDays - 28 + firstday > 7) {
        remainderRow = numberOfDays - 28 + firstday - 7;
        lastRow = numberOfDays - 28 + firstday  - remainderRow;
    } else {
        lastRow = numberOfDays - 28 + firstday;
    }
    

  return (
    <div className="App">
      <div className="calendar">
      <div className='App-Outer'>
          {open ? <Notes date={position} setOpen={setOpen}/> : 
        <div className='App-Outer'>
          {/* <h2>Skinny Mood</h2>
          <h2>{months[month]} {year}</h2> */}
          <div className='App-header'>
            {days.map((day, i) => (
              <Dates key={i} Date={day} setOpen={setOpen} setPosition={setPosition} currentDate={i + 1 === day} previousDate={i + 1 < day} position={month + '/' + (i + 1) + '/' + year} day={true}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 1 - firstday} setOpen={setOpen} setPosition={setPosition} currentDate={i + 1 - firstday === day} previousDate={i + 1 - firstday < day} position={month + '/' + (i + 1 - firstday) + '/' + year} empty={i < firstday}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 8 - firstday} setOpen={setOpen} setPosition={setPosition} currentDate={i + 8 - firstday === day} previousDate={i + 8 - firstday < day} position={month + '/' + (i + 8 - firstday) + '/' + year}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 15 - firstday} setOpen={setOpen} setPosition={setPosition} currentDate={i + 15 - firstday === day} previousDate={i + 15 - firstday < day} position={month + '/' + (i + 15 - firstday) + '/' + year}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 22 - firstday} setOpen={setOpen} setPosition={setPosition} currentDate={i + 22 - firstday === day} previousDate={i + 22 - firstday < day} position={month + '/' + (i + 22 - firstday) + '/' + year}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: lastRow }).map((_, i) => (
              <Dates key={i} Date={i + 29 - firstday} setOpen={setOpen} setPosition={setPosition} currentDate={i + 29 - firstday === day} previousDate={i + 29 - firstday < day} position={month + '/' + (i + 29 - firstday) + '/' + year}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: remainderRow }).map((_, i) => (
              <Dates key={i} Date={numberOfDays - remainderRow + i + 1} setOpen={setOpen} setPosition={setPosition} currentDate={i + 29 - firstday === day} previousDate={i + 29 - firstday < day} position={month + '/' + (i + 29 - firstday) + '/' + year}/>
            ))}
          </div>
        </div>
          }
      </div>
      </div>
    </div>
  );
}

export default App;
