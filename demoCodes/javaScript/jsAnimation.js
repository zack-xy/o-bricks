// 回调限制不超过50毫秒执行一次
let enabled = true


function expensiveOperation () {
  console.log("Invoked at", Date.now());
}


window.addEventListener("scroll", () => {
  if (enabled) {
    enabled = false;
    window.requestAnimationFrame(expensiveOperation);
    window.setTimeout(() => enabled = true, 50);
  }
})