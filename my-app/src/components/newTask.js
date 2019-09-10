import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer';

const newTask = () => {
    const [newTaskText, setNewTaskText] = useState();
    const [] = useReducer
    const handleChanges = e => {
        setNewTaskText({[e.target.name]: e.target.value})
    }
    return (
        <div>

        </div>
    )
}