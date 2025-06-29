# 弹性布局
- flexbox
- 简便、完整、响应式的实现各种页面布局

# 子元素
1. 弹性容器有主轴和交叉轴之分，默认主轴是水平方向，交叉轴是垂直方向
2. 弹性容器的子元素默认都是沿着主轴排列
3. 子容器可以设置 order 属性来改变它们的排列顺序，order 值越小，越靠前
4. 子容器默认不会放大，但可以设置 flex-grow: 1 来允许子容器放大
5. 子容器默认会缩小，但可以设置 flex-shrink: 0 来允许子容器不缩小
6. flex-basis: 100px; 设置子容器的初始尺寸
7. flex: 1 0 100px; 是 flex-grow、flex-shrink 和 flex-basis 的简写 

# 弹性容器
1. flex-direction: row/column; 设置主轴方向
2. justify-content: center/space-between/space-around ; 设置主轴对齐方式
3. align-items: center; 设置单行交叉轴对齐方式
4. flex-wrap: wrap; 设置换行方式(默认不换行)
5. flex-flow: row wrap; 是 flex-direction 和 flex-wrap 的简写
6. align-content: center; 设置多行交叉轴对齐方式

# 多栏目布局
1. 双栏布局
2. 三栏布局