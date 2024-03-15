import { nanoid } from 'nanoid'
import { action, computed, makeObservable, observable } from 'mobx'

// Todo class
export class ObservableTodoStore {
  id = ''
  task = ''
  completed = false

  constructor(task: string) {
    makeObservable(this, {
      id: observable,
      task: observable,
      completed: observable,
      rename: action,
      toggleCompleted: action,
    })
    this.id = nanoid(5)
    this.task = task
  }

  rename(newName: string) {
    this.task = newName
  }

  toggleCompleted() {
    this.completed = !this.completed
  }
}

export class ObservableTodoListStore {
  todos: ObservableTodoStore[] = []

  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodosCount: computed,
      addTodo: action,
      removeTodo: action,
    })
  }

  get completedTodosCount() {
    return this.todos.filter(t => t.completed).length
  }

  addTodo(task: string) {
    const todo = new ObservableTodoStore(task)
    this.todos.push(todo)
  }

  removeTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    this.todos.splice(index, 1)
  }
}

const store = new ObservableTodoListStore()
export default store
