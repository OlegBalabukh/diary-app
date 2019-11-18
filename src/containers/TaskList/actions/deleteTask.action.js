import { DELETE_TASK } from '../constants'

export const deleteTaskAction = (payload) => ({
  type: DELETE_TASK,
  payload
});