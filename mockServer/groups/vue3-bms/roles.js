const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/roles/list`,   // 角色列表
    format: {
      code: 200,
      data: {
        page: {
          pageNum: 1,
          pageSize: 10,
          'total|10-50': 20
        },
        'list|10-50': [
          {
            'permissionList': {
              'checkedKeys|2-5': [
                '@id'
              ],
              'halfCheckedKeys|2-5': [
                '@id'
              ]
            }
          }
        ]
      }
    }
  },
  {
    path: `${baseApi}/roles/all/list`,   // 角色列表
    format: {
      code: 200,
      'data|2-5': [
        {
          '_id': '@id',
          'roleName|1': ['产品经理', '研发', '测试', '前端开发', '后端开发']
        }
      ]
    }
  },
  {
    path: `${baseApi}/roles/operate`,   // 角色创建/编辑/删除
    format: {
      code: 200,
      data: {},
      msg: '角色创建/编辑/删除成功'
    }
  },
  {
    path: `${baseApi}/roles/update/permission`,   // 角色权限设置
    format: {
      code: 200,
      data: {},
      msg: '角色权限更新成功'
    }
  }
]