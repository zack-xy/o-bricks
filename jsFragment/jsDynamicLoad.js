/* eslint-disable @typescript-eslint/no-unused-vars */
// 动态加载js --- 外链js
function loadScript(url) {
  const scipt = document.createElement('script')
  scipt.src = url
  document.body.appendChild(scipt)
}

// 动态加载js --- 代码嵌入
function loadScriptString(code) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  try {
    script.appendChild(document.createTextNode(code))
  }
  catch (ex) {
    script.text = code
  }
  document.body.appendChild(script)
}

// 动态加载css --- 外链css
function loadStyles(url) {
  const link = document.createElement('link')
  link.rel = 'stylessheet'
  link.type = 'text/css'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

// 动态加载css  --- 代码嵌入
function loadStyleString(css) {
  const style = document.createElement('style')
  style.type = 'text/css'
  try {
    style.appendChild(document.createTextNode(css))
  }
  catch (ex) {
    style.styleSheet.cssText = css
  }
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}
