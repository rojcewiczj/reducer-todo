import React from 'react';

export const initialState = {
    todoList: [ 
         { item: 'Learn about reducers',
           completed: false,
           id: 3892987589
             },
        {
          item: 'practice keyboard',
          completed: false,
          id: 2534523452
            },
        ]
};

export const todoReducer = (state, action) => {
   return state;
}

//toggle_completed === toggle editing,
// new task === updat_title