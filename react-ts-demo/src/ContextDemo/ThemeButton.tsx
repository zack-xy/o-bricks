import type { FC } from 'react'
import React, { createContext, useContext, useState } from 'react'
import { ThemeContext } from './index'

const ThemeButton: FC = () => {
  const theme = useContext(ThemeContext)

  const style = { color: theme.fore, background: theme.background }

  return (
    <div>
      <button style={style}>theme button</button>
    </div>
  )
}

export default ThemeButton
