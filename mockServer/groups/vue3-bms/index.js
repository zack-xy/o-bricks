const baseApi = "/vue3Bms"
module.exports = [
    {
        path: `${baseApi}/login`,
        format: {
            "code": 200,
            "msg": "登陆成功",
            "data": {
                "userId": "@word",
                "token": "@guid"
            }
        },
        type: 'post'
    }
]