import React, { useState, useEffect } from 'react';
import './App.css';
import Dates from './Components/Dates';
import Notes from './Components/Notes';

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentDate = new Date()

    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState('');
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [day, setDay] = useState(currentDate.getDate());
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    

    let numberOfDays = new Date(year, month + 1, 0).getDate();
    let firstDayCurrentMonth = new Date(year, month, 1);
    let firstday = days.indexOf(firstDayCurrentMonth.toDateString().split(' ')[0])
    let lastRow = 0;
    let remainderRow = 0;
    
    if (numberOfDays - 28 + firstday > 7) {
        remainderRow = numberOfDays - 28 + firstday - 7;
        lastRow = numberOfDays - 28 + firstday  - remainderRow;
    } else {
        lastRow = numberOfDays - 28 + firstday;
    }

    useEffect(() => {
        if (month === currentDate.getMonth() && year === currentDate.getFullYear()) {
           setDay(currentDate.getDate())
        } else {
            setDay(0)
        }
        
    }, [currentDate, month, year])
    

  return (
    <div className="App">
      <div className="calendar">
      <div className='calendar-header'>
              <div className='calendar-header-top'>
                  <h2>SkinnyMood</h2>
              </div>
              <div className='calendar-header-bottom'>
                  <select className='calendar-header-select' onChange={(e) => setMonth(months.indexOf(e.target.value))}>
                      <option selected= {month === 0 ? 'selected' :''} value='January'>January</option>
                      <option selected= {month === 1 ? 'selected' :''} value='February'>February</option>
                      <option selected= {month === 2 ? 'selected' :''} value='March'>March</option>
                      <option selected= {month === 3 ? 'selected' :''} value='April'>April</option>
                      <option selected= {month === 4 ? 'selected' :''} value='May'>May</option>
                      <option selected= {month === 5 ? 'selected' :''} value='June'>June</option>
                      <option selected= {month === 6 ? 'selected' :''} value='July'>July</option>
                      <option selected= {month === 7 ? 'selected' :''} value='August'>August</option>
                      <option selected= {month === 8 ? 'selected' :''} value='September'>September</option>
                      <option selected= {month === 9 ? 'selected' :''} value='October'>October</option>
                      <option selected= {month === 10 ? 'selected' :''} value='November'>November</option>
                      <option selected= {month === 11 ? 'selected' :''} value='December'>December</option>
                  </select>
                  <select className='calendar-header-select' onChange={(e) => setYear(e.target.value)}>
                      <option selected= {year === 2020 ? 'selected' :''} value='2020'>2020</option>
                      <option selected= {year === 2021 ? 'selected' :''} value='2021'>2021</option>
                      <option selected= {year === 2022 ? 'selected' :''} value='2022'>2022</option>
                      <option selected= {year === 2023 ? 'selected' :''} value='2023'>2023</option>
                      <option selected= {year === 2024 ? 'selected' :''} value='2024'>2024</option>
                      <option selected= {year === 2025 ? 'selected' :''} value='2025'>2025</option>
                      <option selected= {year === 2026 ? 'selected' :''} value='2026'>2026</option>
                      <option selected= {year === 2027 ? 'selected' :''} value='2027'>2027</option>
                      <option selected= {year === 2028 ? 'selected' :''} value='2028'>2028</option>
                      <option selected= {year === 2029 ? 'selected' :''} value='2029'>2029</option>
                      <option selected= {year === 2030 ? 'selected' :''} value='2030'>2030</option>
                  </select>
              </div>
          </div>
      <div className='App-Outer'>
          {open ? <Notes date={position} setOpen={setOpen}/> : 
        <div className='App-Outer'>
          
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
