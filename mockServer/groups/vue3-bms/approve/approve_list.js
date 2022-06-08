module.exports = {
  code: 200,
  data: {
    'page': {
      pageNum: 1,
      pageSize: 20,
      total: 50,
    },
    'list|5-30': [
      {
        'applyUser': {
          userId: '@id',
          userName: '@first',
        },
        'applyState|1': [1, 2, 3, 4],
        '_id': '@id',
        'applyType|1': [1, 2, 3, 4],
        'startTime': '@datetime',
        'endTime': '@datetime',
        'leaveTime': '2天',
      },
    ],
  },
}
