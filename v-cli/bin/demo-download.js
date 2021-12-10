let download = require('download-git-repo')
download('https://github.com/ZackZheng-xy/vue3-bms.git', 'Demo', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})