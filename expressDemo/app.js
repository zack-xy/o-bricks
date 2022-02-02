const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('首页')
})

// 处理get请求
app.get('/register', (req, res) => {
  let filePath = path.join(__dirname, 'views', "register.html")
  // get请求的参数获取  req.query
  // http://localhost:3000/rigister?name=zack&age=20
  const { name, age } = req.query
  console.log('name is:', name);
  console.log('age is: ', age);
  let content = fs.readFileSync(filePath, "utf-8")
  res.send(content)
})

// 处理post请求
app.post('/register', (req, res) => {
  // 获取post请求参数
  // 使用body-parser，注册到app下
  // app.use(bodyParser.....
  const { username, email, password, repassword } = req.body
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(repassword);

  res.send("post ok")
})




app.listen(3000, () => {
  console.log('express running on: 3000');
})