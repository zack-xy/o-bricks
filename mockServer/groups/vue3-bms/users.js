const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/users/login`,   // 登录
    format: {
      code: 200,
      msg: '登陆成功',
      data: {
        userId: '@word',
        userName: '@first',
        state: '@string(5)',
        deptId: '@id',
        token: '@guid',
        roleList: []
      }
    },
    type: 'post'
  },
  {
    path: `${baseApi}/users/list`, //用户列表
    format: {
      code: 200,
      data: {
        page: {
          pageNum: 1,
          pageSize: 10,
          'total| 10 - 50': 20
        },
        'list|1-10': [
          {
            state: 1,
            role: '0',
            'roleList|1-3': [
              '@id'
            ],
            'deptId|1-3': [
              '@id'
            ]
          }
        ]
      }
    },
  }
]