// 操作原生DOM的2种方式

import { useRef, forwardRef } from "react"

const Child = forwardRef((props, ref) => {
  return (
    <div>
      我是head组件
      <input type="text" ref={ref} />
    </div>
  )
})

const Parent = () => {
  const myRef = useRef()
  
  const handleClick = () => {
    myRef.current.focus()
  }

  return (
    <div>
      <button onClick={handleClick}>获取input</button>
      <Child ref={myRef} />
    </div>
  )
}

const UseRefCom = () => {

  const myRef = useRef()

  let inputRef = ''

  const handleGetInput = () => {
    inputRef.focus()
  }

  // 方式一、通过回调函数
  const elementFn = (elem) => {
    inputRef = elem
    console.log(elem)
  }

  // 方式二、通过useRef
  const handleGetInput2 = () => {
    myRef.current.focus()
  }

  // 特性：forwardRef
  // 可以把ref暴露给父组件，让父组件可以操作子组件的DOM

  // 特性：useRef里也可以传值
  // 用于存储一些和渲染无关的数据
  // const someValue = useRef(0)

  /**
   * 
   * 
   * 
  let Welcome = (props) => {  
    const [num, setNum] = useState(0);
    let isUpdate = useRef(false);
    useEffect(()=>{
        if(isUpdate.current){
            console.log(123);
        }
    })
    const handleClick = () => {
        setNum(num + 1)
        isUpdate.current = true;
    }
    return (
        <div>
            <button onClick={handleClick}>点击</button>
        </div>
    );
}
   */

  return (
    <div>
      <h3>方式一：</h3>
      <button onClick={handleGetInput}>获取Input</button>
      <input ref={elementFn} type="text" />
      <hr />
      <h3>方式二：</h3>
      <button onClick={handleGetInput2}>获取Input</button>
      <input ref={myRef} type="text" />
      <hr />
      <h3>通过forwardRef把子组件里的DOM暴露给父组件</h3>
      <Parent />
    </div>
  )
}

export default UseRefCom
