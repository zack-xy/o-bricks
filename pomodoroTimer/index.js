window.addEventListener("load", event => {
  var minute = Number(document.getElementById("input-minute").value || 45);
  var second = 0;
  var timer = null;
  const fixedZero = num =>
    num.length >= 2 ? num : ("00" + num).substr(num.length);
  const setFont = (m, s) => {
    let mStr = fixedZero(String(m));
    let sStr = fixedZero(String(s));
    document.getElementById("minute-font").innerHTML = mStr;
    document.getElementById("second-font").innerHTML = sStr;
    document.title = mStr + ":" + sStr;
  };
  document.title = "测试";
  document.getElementById("input-minute").value = minute;
  document.getElementById("start").addEventListener("click", e => {
    timer && clearInterval(timer);
    minute = Number(document.getElementById("input-minute").value || 45);
    if (!/^[1-9]\d*$/.test(minute)) {
      window.confirm("只能填整数");
      return false;
    }
    --minute;
    second = 60;
    timer = setInterval(() => {
      if (minute === 0 && second === 0) {
        clearInterval(timer);
        document.getElementById("audio").play()
        // window.confirm("倒计时结束！");
      } else if (minute > 0 && second === 0) {
        --minute;
        second = 59;
      } else {
        --second;
      }
      setFont(minute, second);
    }, 1000);
  });
  document.getElementById("reset").addEventListener("click", e => {
    timer && clearInterval(timer);
    minute = 45;
    second = 0;
    setFont(minute, second);
  });
});