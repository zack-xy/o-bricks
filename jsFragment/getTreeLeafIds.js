// 获取树所有叶子结点的id

let tree = [
  {
    name: '一级',
    id: '1',
    children: [
      {
        name: '一级1',
        id: '1-1',
        children: [
          {
            name: '一级1-1',
            id: '1-1-1',
            children: [
              {
                name: '一级1-1-1',
                id: '1-1-1-1'
              }
            ]
          },
          {
            name: '一级1-2',
            id: '1-1-2'
          }
        ]
      },
      {
        name: '一级2',
        id:'1-2'
      }
    ]
  },
  {
    name: '二级',
    id: '2',
    children: [
      {
        name: '二级1',
        id: '2-1',
        children: [
          {
            name: '二级1-1',
            id: '2-1-1'
          },
          {
            name: '二级1-2',
            id: '2-1-2'
          }
        ]
      },
      {
        name: '二级2',
        id:'2-2',
        children: [
          {
            name: '二级2-1',
            id: '2-2-1'
          }
        ]
      }
    ]
  }
]

function getAllLeafIds(tree, obj={}) {
  return tree.reduce((ids, cur) => {
    if(cur.children && cur.children.length > 0) {
      const subIds = getAllLeafIds(cur.children, obj)
      ids.push(...subIds)
      obj[cur.id] = subIds
    } else {
      ids.push(cur.id)
    }
    return ids
  }, [])
}

let ret = {}

getAllLeafIds(tree, ret)
console.log(ret);

let mockData = ['1','2','1-1-1','1-1', '3-1']

let result = mockData.reduce((result, key) => Array.from(new Set(result.concat( ret[key] ||[key]))) , [])


let result2 = []
mockData.forEach(key => result2.push((ret[key] || key)))



console.log(result);
console.log(Array.from(new Set(result2.flat())));
