import { ADD_TASKS_FROM_LOCAL_STORAGE } from '../constants'

export const addTasksFromLocalStorageAction = (payload) => ({
  type: ADD_TASKS_FROM_LOCAL_STORAGE,
  payload
});