import React from 'react';
import './Date.css';

const Dates = ({ Date, setOpen, setPosition, currentDate, previousDate, position, empty, day }) => {

    const handleClick = () => {
        setOpen(true);
        setPosition(position);
    }
    return (
        <div className={empty ? 'emptyDate' : day ? 'dayDate' : currentDate ? 'currentDate' : previousDate ? 'previousDate' :'date'} onClick={() => handleClick()}>
            <span className='date'>{Date}</span>
        </div>
    );
}

export default Dates;