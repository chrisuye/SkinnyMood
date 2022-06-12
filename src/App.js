import React, { useState } from 'react';
import './App.css';
import Date from './Components/Date';
import Notes from './Components/Notes';

const App = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <div className='App-Outer'>
          {open ? <Notes date={position} setOpen={setOpen}/> : 
        <div className='App-Outer'>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Date key={i} Date={i + 1} setOpen={setOpen} setPosition={setPosition}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Date key={i} Date={i + 8} setOpen={setOpen} setPosition={setPosition}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Date key={i} Date={i + 15} setOpen={setOpen} setPosition={setPosition}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 7 }).map((_, i) => (
              <Date key={i} Date={i + 22} setOpen={setOpen} setPosition={setPosition}/>
            ))}
          </div>
          <div className='App-header'>
            {Array.from({ length: 3 }).map((_, i) => (
              <Date key={i} Date={i + 29} setOpen={setOpen} setPosition={setPosition}/>
            ))}
          </div>
        </div>
          }
      </div>
      
    </div>
  );
}

export default App;
