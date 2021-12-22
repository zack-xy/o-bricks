import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = 'Right'
  isLive = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }
  init() {
    //绑定键盘按下事件
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    this.run()
  }
  // 创建键盘按下响应函数
  keyDownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }
  run() {
    let x = this.snake.x
    let y = this.snake.y
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10
        break;
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
      default:
        break;
    }
    // 检查是否吃到食物
    this.checkEat(x, y)
    try {
      this.snake.x = x
      this.snake.y = y
    } catch (e) {
      alert(e)
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
  checkEat(x: number, y: number) {
    if (x === this.food.x && y === this.food.y) {
      console.log('吃到食物');
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}
export default GameControl