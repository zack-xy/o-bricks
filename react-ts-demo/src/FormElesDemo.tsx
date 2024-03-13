import type { ChangeEvent, FC } from 'react'
import { useState } from 'react'

const FormElesDemo: FC = () => {
  const [text, setText] = useState<string>('hello')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }
  return (
    <div>
      <p>Form Elements</p>
      <input value={text} onChange={handleChange} />
    </div>
  )
}

export default FormElesDemo
