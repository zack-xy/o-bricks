/**
 * 开发后台脚手架，快速生成标准Vue后台架构
 * @author Zack Zheng
 */
const { program } = require('commander')
const { promisify } = require('util')
const asyncFiglet = promisify(require('figlet'))
const chalk = require('chalk')
const init = require('./init')
const inquirer = require('inquirer')
const log = content => console.log(chalk.greenBright(content))
// 设置版本和参数
program.version('1.0.0');
program.option('-n --name <type>', 'output name')
// 打印Logo
async function printLogo () {
  let data = await asyncFiglet('Zack Zheng')
  log(data)
}
program
  .command('create <app-name>')
  .description('创建vue项目')
  .action(async name => {
    printLogo()
    log('准备创建项目...')
    let answer = await inquirer.prompt([
      {
        name: 'language',
        type: 'list',
        message: '请选择语言版本',
        choices: ['JavaScript', 'TypeScript']
      },
    ])
    if (answer.language == 'JavaScript') {
      // 下载框架
      init(name)
    } else {
    }
  })

program.parse(process.argv)