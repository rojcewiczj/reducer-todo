import React from 'react';

export const initialState = {
    todoList: [ 
         { title: 'Learn about reducers',
           completed: false,
           id: 3892987589
             },
        {
          title: 'practice keyboard',
          completed: false,
          id: 2534523452
            },
        ]
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "toggle_completed":
         return {
             ...state,
             completed: !state.completed
         }
         case "new_task": 
         return {
             ...state,
             title: action.title
         }
        }
    }
  
}

//toggle_completed === toggle editing,
// new task === updat_title