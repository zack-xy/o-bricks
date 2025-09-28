import React, { useState, useTransition } from 'react';
import { Input, List } from 'antd';
interface Item {
  id: string;
  name: string;
  address: string;
  age: number;
}
function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<Item[]>([]);
  const [isPending, startTransition] = useTransition();
  // 每次输入框值变化的时候，重新请求接口数据
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    fetch('/api/mock/list?key=' + val) // 假设这个接口返回100000条数据
      .then((res) => res.json())
      .then((res) => {
        startTransition(() => {
          setList(res.list);  // 这里渲染列表放入低优先级任务
        });
      });
  };
  return (
    <>
      <Input value={inputValue} onChange={handleChange} />
      {isPending && <div>loading...</div>}
      <List dataSource={list} renderItem={(item) => <List.Item>{item.address}</List.Item>} />
    </>
  );
}

export default App;
