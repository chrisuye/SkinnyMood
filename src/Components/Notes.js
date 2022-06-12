import React, {useState} from 'react';
import './Notes.css';

const Notes = ({ date, setOpen }) => {
    const [option, setOption] = useState(0);
    const [notes, setNotes] = useState([]);
    const [workout, setWorkout] = useState(JSON.parse(localStorage.getItem('workout')) || []);
    const [checkList, setCheckList] = useState([]);

    const editWorkout = (newWorkout, index) => {
        var temp = workout;
        temp[index] = newWorkout;
        setWorkout(temp);
        localStorage.setItem('workout', JSON.stringify(temp));
    }

    return (
        <div className='notes'>
            <div className='notesOption'>
                <div className='workout' onClick={() => setOption(0)}>
                    <span className='workout'>Workout</span>
                </div>
                <div className='note' onClick={() => setOption(1)}>
                    <span className='notes'>Notes</span>
                </div>
                <div className='checkList' onClick={() => setOption(2)}>
                    <span className='checkList'>Checklist</span>
                </div>
                <button className='add' onClick={() => setOpen(false)}> Close </button>
            </div>
            <div className='contents'>
                <div className='Content'>
                    <span className='Content'>Content</span>
                    {option === 0 && <div className='contentIn workoutContent'>
                        <span className='workoutContent'>Workout Content</span>
                        {workout.map((workout, i) => (
                            <div key={i} className='workoutContentInner' contentEditable = {true} onBlur={(e) => editWorkout(e.currentTarget.textContent)}>
                                {workout}
                            </div>
                        ))}
                        <div className='workoutContentInner Blank' contentEditable={true} onBlur={(e) => {
                            setWorkout([e.currentTarget.textContent, ...workout])
                            localStorage.setItem('workout', JSON.stringify([e.currentTarget.textContent, ...workout]));
                            e.currentTarget.textContent = '';
                        }}>
                        </div>
                    </div>}
                    {option === 1 && <div className='contentIn notesContent'>
                        <span className='notesContent'>Notes Content</span>
                        {notes.map((note, i) => (
                            <div key={i} className='notesContentInner' contentEditable = {true} onBlur={(e) => setNotes([e.currentTarget.textContent, ...notes])}>
                                {note}
                            </div>
                        ))}
                        <div className='notesContentInner Blank' contentEditable={true} onBlur={(e) => {
                            setNotes([e.currentTarget.textContent, ...notes])
                            localStorage.setItem('notes', JSON.stringify([e.currentTarget.textContent, ...notes]));
                            e.currentTarget.textContent = '';
                        }
                        }>
                        </div>
                    </div>}
                    {option === 2 && <div className='contentIn checkListContent'>
                        <span className='checkListContent'>Checklist Content</span>
                        {checkList.map((check, i) => (
                            <div key={i} className='checkListContentInner' contentEditable = {true} onBlur={(e) => setCheckList([e.currentTarget.textContent, ...checkList])}>
                                {check}
                            </div>
                        ))}
                        <div className='checkListContentInner Blank' contentEditable={true} onBlur={(e) => {
                            setCheckList([e.currentTarget.textContent, ...checkList])
                            localStorage.setItem('checkList', JSON.stringify([e.currentTarget.textContent, ...checkList]));
                            e.currentTarget.textContent = '';
                        }
                        }>
                        </div> 
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Notes;