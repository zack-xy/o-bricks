import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
interface ChildProps {
  validateForm: () => boolean;
  resetForm: () => void;
}

// React.forwardRef是React18写法
// 子组件是一个表单
const Child = React.forwardRef<ChildProps>((_, ref) => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
    email: '',
  });
  // 参数1：ref 参数2：一个函数，返回一个对象，对象里是暴露给父组件的方法 参数3：依赖项
  useImperativeHandle(ref, () => {
    console.log('我是子组件');
    return {  // 暴露子组件的2个方法
      validateForm,
      resetForm,
    };
  });
  const validateForm = () => {
    if (form.userName.length < 6) {
      return '用户名不能小于6位';
    }
    if (form.password.length < 6) {
      return '密码不能小于6位';
    }
    if (form.email.length === 0) {
      return '邮箱不能是空';
    }
    return true;
  };
  const resetForm = () => {
    setForm({
      userName: '',
      password: '',
      email: '',
    });
  };
  return (
    <div>
      <div>表单组件</div>
      <div>
        <form>
          <input
            type="text"
            placeholder="请输入用户名"
            value={form.userName}
            onChange={(e) => {
              setForm({
                ...form,
                userName: e.target.value,
              });
            }}
          ></input>
          <input
            type="text"
            placeholder="请输入密码"
            value={form.password}
            onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value,
              });
            }}
          ></input>
          <input
            type="text"
            placeholder="请输入邮箱"
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          ></input>
        </form>
      </div>
      <div ref={ref}>我是子组件</div>
    </div>
  );
});

function App() {
  const childRef = useRef<ChildProps>(null);
  return (
    <div>
      <div>我是父组件</div>
      <hr />
      <button
        onClick={() => {
          console.log(childRef.current?.validateForm()); // 利用暴露的句柄直接调用子组件方法
        }}
      >
        校验
      </button>
      <button
        onClick={() => {
          childRef.current?.resetForm();  // 利用暴露的句柄直接调用子组件方法
        }}
      >
        重置
      </button>
      <Child ref={childRef}></Child>
    </div>
  );
}

export default App;
