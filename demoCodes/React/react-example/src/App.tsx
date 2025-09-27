import './App.css'

function App() {

  const fn = <T,>(params: T) => {
    console.log("我被点击了", params)
  }

  return (
    <>
      <div className='card' onClick={() => fn(1)}>点击我</div>
    </>
  )
}

export default App
