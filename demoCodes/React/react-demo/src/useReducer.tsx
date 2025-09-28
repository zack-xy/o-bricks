import React, { useLayoutEffect, useState, useReducer } from 'react';

const initData = [
  {
    id: 1,
    name: 'zack1',
    price: 9,
    count: 1,
    isEdit: false,
  },
  {
    id: 2,
    name: 'zack2',
    price: 19,
    count: 1,
    isEdit: false,
  },
  {
    id: 3,
    name: 'zack3',
    price: 29,
    count: 1,
    isEdit: false,
  },
];
type State = typeof initData;
const reducer = (state: State, action: { type: string; id: number; newName?: string }) => {
  const item = state.find((v) => v.id === action.id)!;
  switch (action.type) {
    case 'add':
      item.count++;
      return [...state];
    case 'sub':
      item.count--;
      return [...state];
    case 'del':
      return state.filter((v) => v.id !== action.id);
    case 'edit':
      item.isEdit = !item.isEdit;
      return [...state];
    case 'edit-name':
      item.name = action.newName!;
      return [...state];
    case 'blur':
      item.isEdit = !item.isEdit;
      return [...state];
    default:
      return state;
  }
};
function App() {
  // 第二次参数是默认值
  // 第三个参数是可选的 初始化函数， 修改默认值
  const [data, dispatch] = useReducer(reducer, initData);
  return (
    <>
      <h1>购物车</h1>
      <table cellSpacing={0} cellPadding={0} border={1} width="100%">
        <thead>
          <tr>
            <th>商品名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td align="center">
                  {item.isEdit ? (
                    <input
                      onBlur={() => dispatch({ type: 'blur', id: item.id })}
                      onChange={(e) =>
                        dispatch({ type: 'edit-name', id: item.id, newName: e.target.value })
                      }
                      type="text"
                      value={item.name}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td align="center">{item.price}</td>
                <td align="center">
                  <button onClick={() => dispatch({ type: 'sub', id: item.id })}>-</button>
                  {item.count}
                  <button onClick={() => dispatch({ type: 'add', id: item.id })}>+</button>
                </td>
                <td align="center">{item.price * item.count}</td>
                <td align="center">
                  <button onClick={() => dispatch({ type: 'del', id: item.id })}>删除</button>
                  <button onClick={() => dispatch({ type: 'edit', id: item.id })}>编辑</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>总价</td>
            <td align="center">
              结算:{' '}
              {data.reduce((prev, cur) => {
                return prev + cur.price * cur.count;
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default App;
