import { useState } from "react";


export default function Counter()  {
  const [number, setNumber] = useState(0)

  const hanldeAdd = () => {
    setNumber(number + 1)
    setNumber(n=>n+1)
    setNumber(number + 1)
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={hanldeAdd}>增加数字</button>
    </>
  )
}
