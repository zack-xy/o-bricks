const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/approve/list`,   // 审批列表
    format: {
      code: 200,
      data: {
        page: {
          pageNum: 1,
          pageSize: 20,
          total: 50
        },
        'list|5-30': [
          {
            applyUser: {
              userId: '@id',
              userName: '@first'
            },
            'applyState|1': [1, 2, 3, 4],
            '_id': '@id',
            'applyType|1': [1, 2, 3, 4],
            startTime: '@datetime',
            endTime: '@datetime',
            'leaveTime': '2天'
          }
        ]
      }
    }
  },
  {
    path: `${baseApi}/approve/count`,   // 待审批通知数量
    format: {
      code: 200,
      'data|0-5': 1,
      msg: ''
    }
  },
  {
    path: `${baseApi}/approve/operate`,   // 创建申请单
    format: {
      code: 200,
      data: {},
      msg: '创建/修改/删除成功'
    }
  },
  {
    path: `${baseApi}/approve/examine`,   // 审核
    format: {
      code: 200,
      data: {},
      'msg|1': ['审核通过', '审核拒绝']
    }
  },
]