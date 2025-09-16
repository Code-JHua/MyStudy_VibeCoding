import React from 'react'

// 缓存组件
const cacheMap = new Map<string, React.ReactNode>();

export default function KeepAlive(props: { children: React.ReactNode }) {
  const { children } = props;
  
  return (
    <div>
      
    </div>
  )
}
