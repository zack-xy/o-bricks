import { nanoid } from 'nanoid'

export interface TodoType {
  id: string
  title: string
}

const initialState: TodoType[] = [
  { id: nanoid(5), title: '吃饭' },
  { id: nanoid(5), title: '睡觉' },
]

export default initialState
