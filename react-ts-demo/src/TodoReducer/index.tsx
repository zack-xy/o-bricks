import type { FC } from 'react'
import React, { createContext, useReducer } from 'react'
import List from './List'
import InputForm from './InputForm'
import type { ActionType } from './reducer'
import reducer from './reducer'
import initialState from './store'

export const TodoContext = createContext({
  state: initialState,
  dispatch: (action: ActionType) => {
    // eslint-disable-next-line no-console
    console.log(action)
  },
})

const TodoReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <List></List>
      <InputForm></InputForm>
    </TodoContext.Provider>
  )
}

export default TodoReducer
