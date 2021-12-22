class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.element.getElementsByTagName('div')
  }
  get x() {
    return this.head.offsetLeft
  }
  get y() {
    return this.head.offsetTop
  }
  set x(value: number) {
    if (this.x === value) return
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    // 判断是否在掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.x) {
        value = this.x - 10
      } else {
        value = this.x + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set y(value: number) {
    if (this.y === value) return
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    // 判断是否在掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.y) {
        value = this.y - 10
      } else {
        value = this.y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  // 蛇身体移动的方法
  moveBody() {
    // 从后往前改
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }
  // 检查是否撞到身体
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
        throw new Error('撞到自己')
      }
    }
  }
}
export default Snake