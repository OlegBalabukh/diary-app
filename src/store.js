import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { taskListReducer as reducer } from './containers/TaskList/reducers/taskList.reducer';
export default createStore(reducer, [], composeWithDevTools(applyMiddleware()));