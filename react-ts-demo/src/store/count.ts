import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE = 100

export const countSlice = createSlice({
  name: 'count', // 模块名字
  initialState: INIT_STATE,
  reducers: {
    increase(state: number) {
      return state + 1
    },
    decrease(state: number) {
      return state - 1
    },
  },
})

export const { increase, decrease } = countSlice.actions

export default countSlice.reducer
