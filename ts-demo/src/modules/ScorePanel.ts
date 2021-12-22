class ScorePanel {
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  // 设置变量，限制等级
  maxLevel: number
  // 设置变量，表示多少分升级
  upScore: number
  constructor(maxLevel = 10, upScore = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 升级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}
export default ScorePanel