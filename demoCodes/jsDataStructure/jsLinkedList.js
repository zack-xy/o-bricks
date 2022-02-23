export function defaultEquals (a, b) {
  return a === b;
}

export class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // 向链表尾部添加一个新元素
  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 向链表特定位置插入一个新元素
  insert (element, position) {

  }

  // 返回特定位置元素，如果不存在返回undefined
  getElementAt (index) {

  }

  // 从链表中移除一个元素
  remove (element) {

  }

  // 返回元素在链表中的索引，如果没有该元素返回-1
  indexOf (element) {

  }

  //移除链表特定位置元素
  removeAt (position) {

  }

  // 判断链表是否为空
  isEmpty () {

  }

  // 返回链表包含的元素个数
  size () {

  }

  // 返回表示链表的整个字符串
  toString () {

  }
}