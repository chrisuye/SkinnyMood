import React, {useState, useEffect} from 'react';
import './Notes.css';

const Notes = ({ date, setOpen }) => {
    const [option, setOption] = useState(0);
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    const [workout, setWorkout] = useState(JSON.parse(localStorage.getItem('workout')) || []);
    const [checkList, setCheckList] = useState(JSON.parse(localStorage.getItem('checkList')) || []);

    const editSave = (content, index, option) => {
        if (option === 1) {
            if (content) {
                setNotes(notes.map((note, i) => {
                    if (i === index) {
                        return {
                            date : date,
                            content : content
                        }
                    }
                    return note
                }
                ));
            } else {
                setNotes(notes.filter((_, i) => i !== index));
            }
            
        } else if (option === 0) {
            if (content) {
                setWorkout(workout.map((note, i) => {
                    if (i === index) {
                        return {
                            date : date,
                            content : content
                        }
                    }
                    return note;
                }
                ));
            } else {
                setWorkout(workout.filter((_, i) => i !== index))
            }
            
        }
        else if (option === 2) {
            if (content) {
                setCheckList(checkList.map((note, i) => {
                    if (i === index) {
                        return {
                            date : date,
                            note : content
                        }
                    }
                    return note;
                }
                ));
            } else {
                setCheckList(checkList.filter((_, i) => i !== index))
            }
            
        }
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('workout', JSON.stringify(workout));
        localStorage.setItem('checkList', JSON.stringify(checkList));
    }, [notes, workout, checkList]);

    return (
        <div className='notes'>
            <div className='notesOption'>
                <div className={option === 0 ? 'active' : 'workout'} onClick={() => setOption(0)}>
                    <span className='workout'>Workout</span>
                </div>
                <div className={option === 1 ? 'active' : 'note'} onClick={() => setOption(1)}>
                    <span className='notes'>Notes</span>
                </div>
                <div className={option === 2 ? 'active' : 'checkList'} onClick={() => setOption(2)}>
                    <span className='checkList'>CheckList</span>
                </div>
                <button className='close' onClick={() => setOpen(false)}> x </button>
            </div>
            <div className='contents'>
                <div className='Content'>
                    {option === 0 && <div className='contentIn workoutContent'>
                        {workout.filter((workout) => workout.date === date).map((workout, i) => (
                            <div key={i} className='workoutContentInner' contentEditable = {true} onBlur={(e) => editSave(e.currentTarget.textContent, i, 0)}>
                                {workout.content}
                            </div>
                        ))}
                        <div className='workoutContentInner Blank' contentEditable={true} onBlur={(e) => {
                            if (e.currentTarget.textContent) {
                                let temp = {
                                    date : date,
                                    content : e.currentTarget.textContent
                                }
                                setWorkout([temp, ...workout])
                            }
                            e.currentTarget.textContent = '';
                        }}>
                        </div>
                    </div>}
                    {option === 1 && <div className='contentIn notesContent'>
                        {notes.filter((note) => note.date === date).map((note, i) => (
                            <div key={i} className='notesContentInner' contentEditable = {true} onBlur={(e) => editSave(e.currentTarget.textContent, i, 1)}>
                                {note.content}
                            </div>
                        ))}
                        <div className='notesContentInner Blank' contentEditable={true} onBlur={(e) => {
                            if (e.currentTarget.textContent) {
                                let temp = {
                                    date : date,
                                    content : e.currentTarget.textContent
                                }
                                setNotes([temp, ...notes])
                            }
                            e.currentTarget.textContent = '';
                        }
                        }>
                        </div>
                    </div>}
                    {option === 2 && <div className='contentIn checkListContent'>
                        {checkList.filter((checkList) => checkList.date === date).map((check, i) => (
                            <div key={i} className='checkListContentInner' contentEditable = {true} onBlur={(e) => editSave(e.currentTarget.textContent, i, 2)}>
                                {check.content}
                            </div>
                        ))}
                        <div className='checkListContentInner Blank' contentEditable={true} onBlur={(e) => {
                            if (e.currentTarget.textContent) {
                                let temp = {
                                    date : date,
                                    content : e.currentTarget.textContent
                                }
                                setCheckList([temp, ...checkList])
                            }
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