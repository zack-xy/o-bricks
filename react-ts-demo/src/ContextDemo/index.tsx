import type { FC } from 'react'
import React, { createContext, useState } from 'react'
import Toobar from './Toobar'

const themes = {
  light: {
    fore: '#000',
    background: '#eee',
  },
  dark: {
    fore: '#fff',
    background: '#222',
  },
}

// 定义ThemeContext
export const ThemeContext = createContext(themes.light)

const ContextDemo: FC = () => {
  const [theme, setTheme] = useState(themes.light)

  function toDark() {
    setTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <span>Context demo</span>
        <button onClick={toDark}>dark</button>
        <Toobar></Toobar>
      </div>
    </ThemeContext.Provider>
  )
}

export default ContextDemo
