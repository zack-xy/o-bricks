const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/dept/list`,   // 部门列表
    format: {
      code: 200,
      data: {
        parentId: [],
        updateTime: '@datetime',
        createTime: '@datetime',
        '_id': '@id',
        deptName: '@cword(5)',
        userId: '@id',
        userName: '@first',
        userEmail: '@email',
        '__v': 0,
        'children|1-3': [
          {
            parentId: [],
            updateTime: '@datetime',
            createTime: '@datetime',
            '_id': '@id',
            deptName: '@cword(5)',
            userId: '@id',
            userName: '@first',
            userEmail: '@email',
            '__v': 0,
            "children|1-3": [
              {
                "parentId": [
                  "60167059c9027b7d2c520a61",
                  "6016728fc6a4417f2d27506e"
                ],
                "updateTime": "@datetime",
                "createTime": "@datetime",
                "_id": "@id",
                "deptName": "@cword(5)",
                "userId": "1000010",
                "userName": "@first",
                "userEmail": "@email",
                "__v": 0
              }
            ]
          }
        ]
      }
    }

  },
  {
    path: `${baseApi}/dept/operate`,   // 部门创建/编辑/删除
    format: {
      code: 200,
      data: {},
      msg: '部门创建/编辑/删除成功'
    }
  }
]