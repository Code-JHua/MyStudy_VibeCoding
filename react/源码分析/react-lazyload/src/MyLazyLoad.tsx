import React, { useState, useRef, useEffect } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface MyLazyLoadProps {
  className?: string,
  style?: CSSProperties,
  placeholder?: ReactNode,
  offset?: number,
  width?: number,
  height?: number,
  onContentVisible?: () => void,
  children: ReactNode,
}

export default function MyLazyLoad(props: MyLazyLoadProps) {
  const { className = "", style, placeholder, offset = 0, width, height, onContentVisible, children } = props
  const [visible, setVisible] = useState(false)
  const elementObserver = useRef<IntersectionObserver>()
  const containerRef = useRef<HTMLDivElement>(null)

  // 处理元素进入可视区域的回调函数
  function lazyLoadHandler(entries: IntersectionObserverEntry[]) {
    const [entry] = entries
    const { isIntersecting } = entry
    
    // 当元素进入可视区域时
    if (isIntersecting) { 
      // 设置可见状态为 true
      setVisible(true)
      // 如果提供了 onContentVisible 回调，则调用它
      onContentVisible?.()

      // 取消对元素的观察，避免重复触发
      const node = containerRef.current
      if (node) {
        elementObserver.current?.unobserve(node)
      }
    }
  }

  // 组件挂载时设置 IntersectionObserver
  useEffect(() => {
    // 配置观察选项
    const options = {
      // 根元素的边距，用于提前触发懒加载
      rootMargin: `${offset}px`,
      // 交叉阈值，0 表示只要有一个像素可见就触发
      threshold: 0,
    }
    
    // 创建 IntersectionObserver 实例并设置回调
    elementObserver.current = new IntersectionObserver(lazyLoadHandler, options)
    
    // 开始观察容器元素
    const node = containerRef.current
    if (node) {
      elementObserver.current.observe(node)
    }
  }, [])



  return (
    <div ref={containerRef} className={className} style={style} >
      {visible ? children : placeholder}
    </div>
  )
}