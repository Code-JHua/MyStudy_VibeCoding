# 说说你对 css 盒子模型的理解
- 是什么  
  盒子模型是指在网页设计中，每个元素都被视为一个矩形的盒子，这个盒子由四部分组成：内容区域（content）、内边距区域（padding）、边框区域（border）和外边距区域（margin）。

- 特性
  - 标准盒子模型(content-box)
    - 宽度(width) = 内容宽度(content) 
  - IE(怪异)盒子模型(border-box)
    - 宽度(width) = 内容宽度(content) + 内边距(padding)  + 边框(border)

- 属性
  box-sizing
  - content-box(标准盒子模型)
  - border-box(IE盒子模型)

# CSS 选择器有哪些? 优先级? 权重?
- 选择器
  1. 标签选择器 
  2. 类选择器 .
  3. id选择器 #
  4. 通配符选择器 *
  5. 后代选择器 空格
  6. 子选择器 >
  7. 相邻选择器 +
  8. 群组选择器 ,
  9. 伪类选择器 :hover, :active, :focus, :visited, :first-child, :last-child, :nth-child()
  10. 伪元素选择器 ::before, ::after
  11. 属性选择器 []
- 优先级
  - !important > 内联样式 > id选择器 > 类选择器 > 标签选择器
- 权重
  - 内联样式权重为 1000
  - id 选择器权重为 100
  - 类选择器权重为 10
  - 标签选择器权重为 1

# 说说 em/px/rem/vw/vh 单位的区别
- 是什么
  - 绝对单位: px
  - 相对单位: em, rem, vw, vh

- 特点
  - em: 相对单位, 相对于父元素的字体大小
  - rem: 相对单位, 相对于根元素的字体大小
  - vw: 相对单位, 相对于视口宽度的百分比
  - vh: 相对单位, 相对于视口高度的百分比

- 场景
  做响应式布局 和 移动端适配, 用相对单位
  - 响应式布局: 不同显示屏尺寸下, 页面元素的大小和位置会自动调整
  - 移动端适配: 不同移动端设备下, 页面元素的大小和位置会自动调整

# css 中有哪些隐藏元素的方法, 区别是什么?
  1. display: none; 不占据文档流, 无法响应事件
  2. visibility: hidden; 占据文档流, 无法响应事件
  3. opacity: 0; 占据文档流, 可以响应事件
  4. width: 0; height: 0; 不占据文档流, 不响应事件
  5. clip-path: clip-path: polygon(0 0, 0 0, 0 0, 0 0); 占据文档流, 不响应事件

# 说说你对 BFC 的理解
- 是什么
  - BFC(Block Formatting Context) 块级格式化上下文
  
- 特点
  1. 是一个独立的渲染区域, 内部拥有一套属于他自己的渲染规则, 内外部元素的布局不会相互影响. 
  2. 内部的元素会在垂直方向上一个接一个的放置. 
  3. 内部元素的 margin 会发生折叠. 
  4. 计算 BFC 的高度时, 浮动元素也会参与计算. 


  创建 BFC 的方式:
  1. overflow: hidden | auto | scroll;
  2. float: left | right;
  3. position: absolute | fixed;
  4. display: inline-block | table-cell | flex | grid;


- 场景
  1. 清除浮动
  2. 防止 margin 重叠


# 元素水平垂直居中的方法有哪些
1. 弹性
2. 网格
3. 定位

# 如何实现多栏布局  
  ## 两栏布局
  1. 弹性  flex: 1
  2. calc() 计算右侧宽度
  3. 浮动
   
  ## 三栏布局
   1. 弹性
   2. 网格

# 解释一下回流重绘
 - 从输入url 到页面渲染完整过程
  1. 网络层
  2. 浏览器层

 - 浏览器层（得到数据包之后）：
  1. 解析 html 数据得到 DOM 树
  2. 解析 css 数据得到 CSSOM 树
  3. 合并 DOM 树和 CSSOM 树得到 渲染树
  4. 计算页面布局 （得到可见的每一个容器的几何属性）（回流）
  5. 将信息发给 GPU，GPU 会根据信息绘制页面（重绘）

  - 发生回流的操作：
    1. 刷新浏览器页面
    2. 容器的几何属性变更
    3. 增加或者删除 可见 的DOM 元素
    4. 浏览器窗口尺寸变更

  
  -  DOM:{
      tag: 'div',
      style: {
        width: '100px',
        height: '100px',
        background: 'red'
      }
      attr: {
        id: 'app',
        class: 'container'
      },
      children: [
        {
          tag: 'div',
          style: {
            width: '100px',
            height: '100px',
            background: 'red'
          }
          attr: {
            id: 'title',
            class: 'title'
          },
          children: [
            {
              text: 'hello world'
            }
          ]
        }
      ]
    }
    <!-- div p span{
      xxxxxx
    } -->
  -  CSSOM:{
      selector: 'div',
      style: {
        width: '100px',
        height: '100px',
        background: 'red'
      }
    }
    
  - 浏览器的优化策略：
    由于每一次回流重绘都会带来额外的性能消耗，因此大多数浏览器会通过队列来优化回流重绘的次数，浏览器将会导致回流的操作都存入队列，直到一段时间之后或者达到阈值，才一次性清空队列。

  - 特殊的属性：
   offsetWidth, offsetHeight, offsetTop, offsetLeft
   scrollWidth, scrollHeight, scrollTop, scrollLeft
   clientWidth, clientHeight, clientTop, clientLeft
   以上这些属性会强制刷新优化队列

  - 如何尽量减少回流重绘
   1. 将要发生回流操作的 dom 先从文档流中剔除，待所有的操作完毕后再添加回文档流
   2. 使用文档碎片
   3. 使用克隆节点