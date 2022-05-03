## vue1.0
### zVue.js
粒度精细，一个值一个watcher

## vue2.0
粒度折中，一个组件一个watcher
组件内部值发生变化，如何知道变了
重新渲染一次获取最新的虚拟dom
进行diff算法