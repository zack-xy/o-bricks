import type { ChangeEvent, FC } from 'react'
import React, { useContext, useReducer, useState } from 'react'
import { nanoid } from 'nanoid'
import reducer from './reducer'
import initialStore from './store'
import { TodoContext } from './index'

const InputForm: FC = () => {
  const [text, setText] = useState('')
  // const [state, dispatch] = useReducer(reducer, initialStore)

  const { state, dispatch } = useContext(TodoContext)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim())
      return

    const newTodo = { id: nanoid(5), title: text }
    dispatch({ type: 'add', payload: newTodo })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">what needs to be done?</label>
      <br />
      <input id="new-todo" type="text" onChange={handleChange} value={text} />
      <button type="submit">
        Add #
        {state.length}
      </button>
    </form>
  )
}

export default InputForm
