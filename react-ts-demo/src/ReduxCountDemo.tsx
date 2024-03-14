import type { FC } from 'react'
import React, { createContext, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './store/count'
import type { StateType } from './store'

const ReduxCountDemo: FC = () => {
  const count = useSelector<StateType>(state => state.count)

  const dispatch = useDispatch()

  return (
    <>
      <span>
        <>
          count:
          {count}
        </>
      </span>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </>
  )
}

export default ReduxCountDemo
