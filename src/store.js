import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  newTask: {
    id: null,
    taskName: "",
    isFocused: false,
    comments: []
  },
  tasks: []  
};


const reducer = (state = initialState, action) => {
  switch(action.type) {

    case "CREATE_TASK":
      return { 
        ...state,
        newTask: Object.assign(initialState.newTask, {
          id: Date.now(),
          taskName: action.payload.taskName
        })
      };

    case "ADD_TASK":
      return {
        tasks: state.tasks.concat(state.newTask),
        newTask: initialState.newTask
      };
      
      case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => 
          task.id !== action.payload
          )
      };

      case "SET_ACTIVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          task.id === action.payload
            ? task = {...task, isFocused: true}
            : task = {...task, isFocused: false}
          return task;  
        })
      };

      case "ADD_COMMENT":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          task.isFocused 
            && task.comments.concat(action.payload);
          return task;
        })
      };
      
      default: {
        return state
      }
  }
}

export default createStore(reducer, {}, composeWithDevTools(applyMiddleware()));