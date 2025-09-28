import { useSyncExternalStore } from 'react';
export const useStorage = (key: string, initValue: any) => {
  // 订阅者
  const subscribe = (callback: () => void) => {
    // 订阅浏览器的api
    window.addEventListener('storage', callback);
    return () => {
      // 取消订阅
      window.removeEventListener('storage', callback);
    };
  };
  const getSnapshot = () => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : initValue;
  };
  const res = useSyncExternalStore(subscribe, getSnapshot);

  const updateStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    // 通知订阅者 手动触发storage事件
    // 这里原因是：storage 事件只会在 同源的其他文档（即其他 tab、iframe、window）里触发，不会在当前触发 setItem 的这个文档里触发。所以这里手动触发
    window.dispatchEvent(new StorageEvent('storage'));
  };

  return [res, updateStorage];
};
