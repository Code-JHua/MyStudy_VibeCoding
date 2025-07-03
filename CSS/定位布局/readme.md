# 定位
1. 静态定位: position: static; 
 - 默认值, 不定位

2. 相对定位: position: relative; 
 - 相对自身原来的位置进行定位 
 - 不会脱离文档流

3. 绝对定位: position: absolute; 
 - 相对于最近的定位父级元素进行定位, 如果没有定位父级元素, 则相对于body元素进行定位
 - 会脱离文档流
 - 水平和垂直居中:
  - left: 50%;
  - top: 50%;
  - transform: translate(-50%, -50%);

4. 固定定位: position: fixed; 
 - 相对于浏览器窗口进行定位, 不随滚动条滚动
 - 会脱离文档流

5. 粘性定位: position: sticky;
 - 根据滚动的位置在 relative 和 fixed 定位之间切换
 - 它的行为就像 relative 定位，直到滚动到指定的阈值，当阈值被越过时，它的行为就像 fixed 定位。