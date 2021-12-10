/**
 * 项目克隆
 */
const { promisify } = require('util')
const ora = require('ora');
const download = promisify(require('download-git-repo'))
const chalk = require('chalk')
const shell = require('shelljs')
const log = content => console.log(chalk.greenBright(content))
module.exports = async (appName) => {
  log(`创建项目 ${appName}`)
  shell.rm('-rf', appName)
  const spinner = ora('下载中...').start();
  try {
    await download('https://github.com/ZackZheng-xy/vue3-bms.git', appName, { clone: true }, function (err) {
      console.log(err ? 'Error' : 'Success')
    })
    spinner.succeed('下载完成')
    log(`
         下载完成，启动：
         ============================================
         cd ${appName}
         yarn 或者 npm i 
         yarn dev 或者 npm run dev
         `)
  } catch (error) {
    log('下载失败', error)
    spinner.stop()
  }
}