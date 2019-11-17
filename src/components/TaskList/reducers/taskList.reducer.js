export const taskListReducer = (state = [], {type, payload}) => {
  switch(type) {

    case "ADD_TASK":      
      return state.concat({
        id: payload.id,
        taskName: payload.taskName,
        isFocused: false,
        comments: []
      });
      
      case "DELETE_TASK":
        return state.filter(task => 
          task.id !== payload
        );

      case "SET_ACTIVE_TASK":
        return state.map(task => {
          task.id === payload
            ? task = {...task, isFocused: true}
            : task = {...task, isFocused: false}
          return task;  
          });

      case "ADD_COMMENT":
        return state.map(task => {
          task.isFocused &&
          ( task = { 
            ...task,
            comments: [ ...task.comments, payload]
          })
          return task;
          });
      
      default: 
        return state  
  }
}