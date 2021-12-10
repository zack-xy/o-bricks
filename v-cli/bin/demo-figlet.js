let { promisify } = require('util')
let asyncFiglet = promisify(require('figlet'))
async function run () {
  let data = await asyncFiglet('Zack Zheng')
  console.log(data)
}
run()