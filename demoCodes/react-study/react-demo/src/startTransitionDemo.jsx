import { useState, memo, startTransition } from "react"

const List = memo(({ query }) => {
  const text = 'hello world'
  const items = []

  console.log('query', query);

  console.log("List rendered!!!");

  if(query && text.includes(query)) {
    const arr = text.split(query)
    for(let i=0;i<100;i++) {
      items.push(<li key={i}>{arr[0]}<span style={{color: 'red'}}>{query}</span>{arr[1]}</li>)
    }
  } else {
    for(let i=0;i<100;i++) {
      items.push(<li key={i}>{text}</li>)
    }
  }

  return (
    <ul>
      {items}
    </ul>
  )
})

const TransitionCom = () => {
  const [searchWord, setSearchWord] = useState('')
  const [query, setQuery] = useState('')

  const handleChange = (ev) => {
    setSearchWord(ev.target.value) // 第一个任务
    startTransition(() => {
      setQuery(ev.target.value)  // 第二个任务（不紧急）
    })
  }

  return (
    <div>
      <input type="text" value={searchWord} onChange={handleChange} />
      <List query={query} />
    </div>
  )
}

export default TransitionCom
