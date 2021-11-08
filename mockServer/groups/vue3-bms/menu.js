const { baseApi } = require('./base')
module.exports = [
  {
    path: `${baseApi}/menu/list`,   // 菜单列表
    format: {
      code: 200,
      data: [
        {
          parentId: [
          ],
          updateTime: '@datetime',
          createTime: '@datetime',
          '_id': '@id',
          menuType: '1',
          menuName: '系统管理',
          menuCode: '',
          path: '/system',
          icon: 'setting',
          component: '',
          children: [

          ]
        }
      ]
    },
    timeout: 1000
  },
  {
    path: `${baseApi}/menu/operate`,   // 菜单/创建/编辑/删除
    format: {
      code: 200,
      data: {},
      msg: '菜单/创建/编辑/删除成功'
    }
  }
]