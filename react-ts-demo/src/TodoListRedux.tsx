import type { FC } from 'react'
import React, { createContext, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import type { TodoItemType } from './store/todoList'
import { addTodo, removeTodo, toggleCompleted } from './store/todoList'
import type { StateType } from './store'

const TodoListRedux: FC = () => {
  const todoList = useSelector<StateType>(state => state.todoList) as TodoItemType[]

  const dispatch = useDispatch()

  function add() {
    const id = nanoid(5)
    dispatch(addTodo({
      id,
      title: `todo-${id}`,
      completed: false,
    }))
  }

  function del(id: string) {
    dispatch(removeTodo({ id }))
  }

  function toggle(id: string) {
    dispatch(toggleCompleted({ id }))
  }

  return (
    <>
      <button onClick={add}>添加</button>
      <ul>
        {todoList.map((todo) => {
          const { id, title, completed } = todo
          return (
            <li
              key={id}
              style={{ textDecoration: completed ? 'line-through' : '' }}
            >
              <span onClick={() => toggle(id)}>{title}</span>
              &nbsp;
              <button onClick={() => del(id)}>删除</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoListRedux
