import type { FC } from 'react'
import React, { createContext, useState } from 'react'
import ThemeButton from './ThemeButton'

const Toolbar: FC = () => {
  return (
    <div>
      <p>Toolbar</p>
      <ThemeButton></ThemeButton>
    </div>
  )
}

export default Toolbar
