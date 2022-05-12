module.exports = {
  code: 200,
  data: {
    page: {
      pageNum: 1,
      pageSize: 10,
      'total|10-50': 20
    },
    'list|1-10': [
      {
        'state|1': [1, 2, 3], // 1:在职 2:离职 3:试用期
        'role|1': [0, 1, 2], // 0:超级管理员 1：管理员  2：普通用户
        'roleList': function () {
          const roleIds = [
            '11001', '11002', '11003', '11004', '11005', '11006', '11007', '11008'
          ]
          return roleIds.slice(0, parseInt(Math.random() * 9))
        },
        'deptId|1': [
          '10000101', '100002', '100003', '100004', '100005', '100006', '100007', '100008', '100009', '100010'
        ],
        'userId|+1': 1000010,
        'userName': '@first',
        'email': '@email',
        'createTime': '@datetime',
        'lastLoginTime': '@datetime',
        '__v': 0,
        'job|1': ['前端架构师', '测试工程师', '后端架构师', '项目经理'],
        'mobile': /^1[3456789]\d{9}$/
      }
    ]
  }
}