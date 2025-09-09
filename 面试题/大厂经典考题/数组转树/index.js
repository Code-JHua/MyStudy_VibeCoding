function conver(list, parentId, currentId, rootValue) {
  // 创建节点映射，便于快速查找
  const nodeMap = new Map();
  
  // 创建根节点
  const root = {
    id: rootValue,
    children: []
  };
  
  // 先将所有节点存入映射中
  list.forEach(item => {
    nodeMap.set(item[currentId], {
      id: item[currentId],
      children: []
    });
  });
  
  // 层序遍历的核心 - 使用队列
  const queue = [root];
  
  while (queue.length > 0) {
    // 取出当前节点
    const currentNode = queue.shift();
    
    // 查找当前节点的所有子节点
    list.forEach(item => {
      if (item[parentId] === currentNode.id) {
        // 从映射中获取子节点
        const childNode = nodeMap.get(item[currentId]);
        // 添加到当前节点的children数组
        currentNode.children.push(childNode);
        // 将子节点加入队列，以便后续处理它的子节点
        queue.push(childNode);
      }
    });
  }
  
  return root;
}


// 测试用例
const list = [
  { id: 19, parentId: 0 },
  { id: 18, parentId: 16 },
  { id: 17, parentId: 16 },
  { id: 16, parentId: 0}
]

const result = conver(list, "parentId", "id", 0)
// 使用console.dir显示完整的树形结构，包括嵌套的子节点
console.dir(result, { depth: null, colors: true })
// const tree = {
//   id: 0,
//   children: [
//     {
//       id: 16,
//       children: [
//         {
//           id: 18,
//           children: []
//         },
//         {
//           id: 17,
//           children: []
//         }
//       ],
//     },
//     {
//       id: 19,
//       children: []
//     }
//   ]
// }