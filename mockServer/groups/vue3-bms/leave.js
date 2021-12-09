const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/leave/list`,   // 审批列表
    format: {
      code: 200,
      data: {
        "page": {
          "pageNum": 1,
          "pageSize": 10,
          "total": 4
        },
        "list": [
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 4,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 2,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 3,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 1,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 2,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 2,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 3,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 2,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 2,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 2,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 1,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 1,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 4,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 2,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 4,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 2,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 3,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 1,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          },
          {
            "applyUser": {
              "userId": "1000002",
              "userName": "admin"
            },
            "applyState": 2,
            "_id": "603081dd525ae1359dd7e2fb",
            "applyType": 3,
            "startTime": "2021-02-17T16:00:00.000Z",
            "endTime": "2021-02-18T16:00:00.000Z",
            "leaveTime": "2天",
            "reasons": "测试",
            "orderNo": "XJ202102200",
            "auditUsers": "tom,Baidu,Ali",
            "curAuditUserName": "Ali",
            "auditFlows": [
              {
                "_id": "603081dd525ae1359dd7e2fc",
                "userId": "1000004",
                "userName": "tom",
                "userEmail": "tom@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fd",
                "userId": "1000011",
                "userName": "Baidu",
                "userEmail": "Baidu@imooc.com"
              },
              {
                "_id": "603081dd525ae1359dd7e2fe",
                "userId": "1000013",
                "userName": "Ali",
                "userEmail": "Ali@imooc.com"
              }
            ],
            "auditLogs": [
              {
                "_id": "603082f316663b36f713b16b",
                "userId": "1000004",
                "userName": "tom",
                "createTime": "2021-02-20T03:33:07.175Z",
                "remark": "tongyi",
                "action": "审核通过"
              },
              {
                "_id": "6030b1df93f0e159c8390f01",
                "userId": "1000011",
                "userName": "Baidu",
                "createTime": "2021-02-20T06:53:19.493Z",
                "remark": "同意",
                "action": "审核通过"
              },
              {
                "_id": "6030b1fb93f0e159c8390f04",
                "userId": "1000013",
                "userName": "Ali",
                "createTime": "2021-02-20T06:53:47.955Z",
                "remark": "OK",
                "action": "审核通过"
              }
            ],
            "createTime": "2021-02-20T03:28:29.850Z",
            "__v": 0
          }
        ]
      }
    }
  },
  {
    path: `${baseApi}/leave/operate`,   // 申请休假
    format: {
      code: 200,
      data: {},
      msg: '创建/修改/删除成功'
    }
  },
  {
    path: `${baseApi}/leave/approve`,   // 申请休假
    format: {
      code: 200,
      data: {},
      msg: '处理成功'
    }
  },
]