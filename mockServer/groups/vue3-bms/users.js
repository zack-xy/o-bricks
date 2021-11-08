const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/users/login`,   // 登录
    format: {
      code: 200,
      msg: '登陆成功',
      data: {
        userId: '100001',
        userName: '@first',
        'state|1-3': 1, // 1:在职 2:离职 3:试用期
        'sex|1': [0, 1], // 性别：0:男 1:女
        userEmail: '@email',
        deptId: ['token'],
        token: '@guid',
        'role|1': [0, 1], // 用户角色：0:系统管理员 1:普通用户
        roleList: [],
        createTime: '@datetime',
        lastLoginTime: '@datetime'
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
            state: 1, // 0:所有 1:在职 2:离职 3:试用期
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
  },
  {
    path: `${baseApi}/users/all/list`, // 所有用户列表
    format: {
      code: 200,
      'data|1-10': [
        {
          state: 1,
          role: '0',
          'roleList|1-3': [
            '@id'
          ],
          'deptId|1-3': [
            '@id'
          ],
          userId: '@word',
          userName: '@first',
          userEmail: '@email',
          createTime: '@datetime',
          lastLoginTime: '@datetime'
        }
      ]
    }
  },
  {
    path: `${baseApi}/users/operate`, // 用户创建/编辑
    format: {
      code: 200,
      data: {},
      msg: "创建成功"
    }
  },
  {
    path: `${baseApi}/users/delete`, // 用户删除
    format: {
      code: 200,
      data: {
        'nModified|1-10': 1  // 成功删除条数 
      }
    }
  },
  {
    path: `${baseApi}/users/getPermissionList`, // 用户权限列表
    format: {
      code: 200,
      data: {
        'menuList|1-10': [
          {
            'parantId': [],
            updateTime: '@datetime',
            createTime: '@datetime',
            '_id': '@id',
            menuType: '1',
            menuName: '系统管理',
            menuCode: '',
            path: '/system',
            icon: 'setting',
            order: '0',
            component: '',
            children: [
            ]
          }
        ]
      }
    }
  }
]