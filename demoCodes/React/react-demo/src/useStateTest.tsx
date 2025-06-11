import { useState } from "react";


export default function Counter() {
  const [number, setNumber] = useState(0)

  const hanldeAdd = () => {
    setNumber(number + 5)
    setNumber(n=>n+1)
    setNumber(number + 2) // 有这一行就是2，没有这一行是6
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={hanldeAdd}>增加数字</button>
    </>
  )
}
