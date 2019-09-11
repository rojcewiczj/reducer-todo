import React from 'react';


export const initialState = 
          [ 
         { title: 'Learn about reducers',
           completed: false,
           id: 3892987589
             },
        {
          title: 'practice keyboard',
          completed: false,
          id: 2534523452
            },
        ];


export const todoReducer = (state, action) => {
    console.log("reducer state/action", state, action)
    switch(action.type) {
        
  
        case "toggle_completed":
                let clickNewState = state.map(item => {
                    if (item.id === action.payload) {
                      return {
                        ...item,
                        completed: !item.completed
                      };
                    } else {
                      return item;
                    } 
                   
                  });
                  return clickNewState;
                  
         case "new_task": 
         return [ ...state,
            {
                
            
             title: action.payload,
             completed: false,
             id: Date.now(),
         }
        ];
        
        case "remove_task":
            let removeTask = state.filter(item =>
                {
                    if (item.completed === true) {
                        return !item.completed;
                    }
                    else {
                        return item;
                    }
                })
                return removeTask
    }
}


//toggle_completed === toggle editing,
// new task === updat_title