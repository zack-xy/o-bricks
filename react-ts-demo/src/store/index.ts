import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import type { TodoItemType } from './todoList'
import todoListReducer from './todoList'

export interface StateType {
  count: number
  todoList: TodoItemType[]
}

export default configureStore({
  reducer: {
    count: countReducer,
    todoList: todoListReducer,
  },
})
