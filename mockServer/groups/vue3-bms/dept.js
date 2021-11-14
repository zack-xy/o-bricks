const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/dept/list`,   // 部门列表
    format: {
      "code": 200,
      "data": [
        {
          "parentId": [
            null
          ],
          "updateTime": "2021-01-31T08:53:37.418Z",
          "createTime": "2021-01-31T08:53:37.418Z",
          "_id": "10000",
          "deptName": "zz总司",
          "userId": "1000002",
          "userName": "admin",
          "userEmail": "admin@imooc.com",
          "__v": 0,
          "children": [
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-01-31T09:03:23.337Z",
              "createTime": "2021-01-31T09:03:23.337Z",
              "_id": "100001",
              "deptName": "研发部门",
              "userId": "1000003",
              "userName": "jack",
              "userEmail": "jack@imooc.com",
              "__v": 0,
              "children": [
                {
                  "parentId": [
                    "10000",
                    "100001"
                  ],
                  "updateTime": "2021-02-01T13:05:06.188Z",
                  "createTime": "2021-01-31T09:19:09.081Z",
                  "_id": "10000101",
                  "deptName": "JAVA小组-1",
                  "userId": "1000010",
                  "userName": "Tim",
                  "userEmail": "Tim@imooc.com",
                  "__v": 0
                }
              ]
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-02-21T12:44:16.249Z",
              "createTime": "2021-01-31T09:03:23.337Z",
              "_id": "100002",
              "deptName": "前端部门",
              "userId": "1000004",
              "userName": "tom",
              "userEmail": "tom@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-01-31T09:03:23.337Z",
              "createTime": "2021-01-31T09:03:23.337Z",
              "_id": "100003",
              "deptName": "测试部门",
              "userId": "1000005",
              "userName": "Lucy",
              "userEmail": "Lucy@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-01-31T09:03:23.337Z",
              "createTime": "2021-01-31T09:03:23.337Z",
              "_id": "100004",
              "deptName": "UED部门",
              "userId": "1000006",
              "userName": "Jim",
              "userEmail": "Jim@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-01-31T09:03:23.337Z",
              "createTime": "2021-01-31T09:03:23.337Z",
              "_id": "100005",
              "deptName": "大数据部门",
              "userId": "1000007",
              "userName": "MaLi",
              "userEmail": "MaLi@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-02-01T14:06:49.922Z",
              "createTime": "2021-02-01T14:06:49.922Z",
              "_id": "100006",
              "deptName": "市场部门",
              "userId": "1000011",
              "userName": "Baidu",
              "userEmail": "Baidu@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-02-01T14:06:49.922Z",
              "createTime": "2021-02-01T14:06:49.922Z",
              "_id": "100007",
              "deptName": "运营部门",
              "userId": "1000012",
              "userName": "TengXun",
              "userEmail": "TengXun@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-02-01T14:06:49.922Z",
              "createTime": "2021-02-01T14:06:49.922Z",
              "_id": "100008",
              "deptName": "运维部门",
              "userId": "1000014",
              "userName": "Apple",
              "userEmail": "Apple@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-02-18T16:29:35.671Z",
              "createTime": "2021-02-18T16:29:35.671Z",
              "_id": "100009",
              "deptName": "人事部",
              "userId": "1000011",
              "userName": "Baidu",
              "userEmail": "Baidu@imooc.com",
              "__v": 0
            },
            {
              "parentId": [
                "10000"
              ],
              "updateTime": "2021-02-18T16:29:35.671Z",
              "createTime": "2021-02-18T16:29:35.671Z",
              "_id": "100010",
              "deptName": "财务部",
              "userId": "1000013",
              "userName": "Ali",
              "userEmail": "Ali@imooc.com",
              "__v": 0
            }
          ]
        }
      ],
      "msg": ""
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