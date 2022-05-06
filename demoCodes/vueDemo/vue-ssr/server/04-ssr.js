const express = require('express')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const app = express()
const resolve = dir => require('path').resolve(__dirname, dir)
// 参数1：服务端bundle
const bundle = resolve('../dist/server/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext
  template: require('fs').readFileSync(resolve("../public/index.html"), "utf-8"), // 宿主文件
  clientManifest: require(resolve("../dist/client/vue-ssr-client-manifest.json")) // 客户端清单
})

// 静态文件服务
// 开放dist/client目录，关闭默认的index页面打开功能
app.use(express.static(resolve('../dist/client'), { index: false }))


app.get('*', async (req, res) => {
  try {
    const context = {
      url: req.url
    }
    const html = await renderer.renderToString(context)
    res.send(html)
  } catch (error) {
    res.status(500).send('服务器错误')
    console.log(error);
  }
})

app.listen(3000, () => {
  console.log('server运行');
})