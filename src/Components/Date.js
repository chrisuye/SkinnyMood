import React from 'react';
import './Date.css';


const Date = ({ Date, setOpen, setPosition }) => {

    const handleClick = () => {
        setOpen(true);
        setPosition(Date);
    }
    return (
        <div className='date' onClick={() => handleClick()}>
            <span className='date'>{Date}</span>
        </div>
    );
}


export default Date;