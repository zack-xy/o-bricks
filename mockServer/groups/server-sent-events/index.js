const router = require('../../server/route')
// Server-Sent Events 只能是get请求
// 这里的流返回有问题，只能用一次?
router.get('serverSentEvents/stream', (ctx) => {
    var stream = new PassThrough()
    var stream2 = new PassThrough()
    const msgList = [
        { message: "消息111111" }
    ]
    ctx.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    interval = setInterval(function () {
        msgList.unshift({
            message: `消息：${new Date().getTime()}`,
            userId: "zack"
        })
        stream2.write("data: " + JSON.stringify(msgList) + "\n\n")
    }, 5000);
    ctx.body = stream.on('error', (err) => ctx.onerror(err)).pipe(stream2);
})
// get请求
// router.get('/(.*)', (ctx) => {
//     ctx.body = '访问到服务器'
// })