import type { FC } from 'react'
import React, { createContext, useReducer, useState } from 'react'

interface StateType { count: number }
interface ActionType { type: string }

const initialState: StateType = { count: 100 }

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
      break
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error('wrong type')
  }
}

const CountReducer: FC = () => {
  // const [count, setCount] = useState(100)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <span>
        count:
        {/* {count} */}
        {state.count}
      </span>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default CountReducer
