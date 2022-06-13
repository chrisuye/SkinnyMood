import React, { useState } from 'react';
import './App.css';
import Dates from './Components/Dates';
import Notes from './Components/Notes';

const App = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(0);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    const currentDate = new Date()
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let numberOfDays = new Date(year, month + 1, 0).getDate();

  return (
    <div className="App">
      <div className='App-Outer'>
          {open ? <Notes date={position} setOpen={setOpen}/> : 
        <div className='App-Outer'>
          <h2>Skinny Mood</h2>
          <h2>{months[month]} {year}</h2>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 1} setOpen={setOpen} setPosition={setPosition} currentDate={i + 1 === day} previousDate={i + 1 < day}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 8} setOpen={setOpen} setPosition={setPosition} currentDate={i + 8 === day} previousDate={i + 8 < day}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 15} setOpen={setOpen} setPosition={setPosition} currentDate={i + 15 === day} previousDate={i + 15 < day}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Dates key={i} Date={i + 22} setOpen={setOpen} setPosition={setPosition} currentDate={i + 22 === day} previousDate={i + 22 < day}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: numberOfDays - 28 }).map((_, i) => (
              <Dates key={i} Date={i + 29} setOpen={setOpen} setPosition={setPosition} currentDate={i + 29 === day} previousDate={i + 29 < day}/>
            ))}
          </div>
        </div>
          }
      </div>
      
    </div>
  );
}

export default App;
