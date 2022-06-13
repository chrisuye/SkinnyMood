import React from 'react';
import './Date.css';


const Dates = ({ Date, setOpen, setPosition, currentDate, previousDate }) => {

    const handleClick = () => {
        setOpen(true);
        setPosition(Date);
    }
    return (
        <div className={currentDate ? 'currentDate' : previousDate ? 'previousDate' :'date'} onClick={() => handleClick()}>
            <span className='date'>{Date}</span>
        </div>
    );
}


export default Dates;