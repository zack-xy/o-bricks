import type { FC } from 'react'
import React, { useEffect } from 'react'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import type { ObservableTodoListStore, ObservableTodoStore } from './store'
import store from './store'

interface PropsList {
  store: ObservableTodoListStore
}

interface PropsTodo {
  todo: ObservableTodoStore
  del: (id: string) => void
}

const TodoView: FC<PropsTodo> = observer((props) => {
  const { todo, del } = props

  function rename() {
    // eslint-disable-next-line no-alert
    const newName = window.prompt('重新输入名称', todo.task)
    if (newName)
      todo.rename(newName)
  }

  function toggleCompleted() {
    todo.toggleCompleted()
  }

  return (
    <>
      <li onDoubleClick={rename}>
        <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.task}</span>
        <button onClick={() => del(todo.id)}>删除</button>
      </li>
    </>
  )
})

const TodoList: FC<PropsList> = observer((props: PropsList) => {
  const { store } = props

  function newTodo() {
    // eslint-disable-next-line no-alert
    const taskName = window.prompt('请输入一个todo名称')
    if (taskName)
      store.addTodo(taskName)
  }

  function del(id: string) {
    store.removeTodo(id)
  }

  return (
    <>
      <button onClick={newTodo}>add todo</button>
      <ul>
        {store.todos.map((todo) => {
          const { id } = todo
          return <TodoView key={id} todo={todo} del={del} />
        })}
      </ul>
      <p>
        完成的数量
        {store.completedTodosCount}
      </p>
    </>
  )
})

const TodoListDemo: FC = () => {
  return (
    <>
      <p>TodoList by Mobx</p>
      <TodoList store={store}></TodoList>
    </>
  )
}

export default TodoListDemo
