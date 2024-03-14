import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export interface TodoItemType {
  id: string
  title: string
  completed: boolean
}

const INIT_STATE: TodoItemType[] = [
  { id: nanoid(5), title: '吃饭', completed: true },
  { id: nanoid(5), title: '睡觉', completed: false },
]

export const todoSlice = createSlice({
  name: 'todoList', // 模块名字
  initialState: INIT_STATE,
  reducers: {
    addTodo(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
      return [
        action.payload,
        ...state,
      ]
    },
    removeTodo(state: TodoItemType[], action: PayloadAction<Pick<TodoItemType, 'id'>>) {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    toggleCompleted(state: TodoItemType[], action: PayloadAction<Pick<TodoItemType, 'id'>>) {
      const { id: toggleId } = action.payload
      return state.map((todo) => {
        const { id, completed } = todo
        if (id === toggleId)
          return { ...todo, completed: !completed }
        else return todo
      })
    },
  },
})

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer
