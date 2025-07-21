import React,{ useEffect, } from 'react'
import { useComponentsStore } from '../../stores/components'
import type { Component } from '../../stores/components'
import { useComponentConfigStore } from '../../stores/component-config'
export default function EditArea() {
  const { components, addComponent, removeComponent, updateComponentProps } = useComponentsStore()
  const { registerComponent, componentConfig } = useComponentConfigStore()
  
  // useEffect(() => {
  //   addComponent({
  //     id: 2,
  //     name: 'Container',
  //     props: {},
  //     desc: '页面的容器',
  //     children: [],
  //     parentId: 1,
  //   }, 1)
  //   addComponent({
  //     id: 3,
  //     name: 'Button',
  //     props: {
  //       text: '提交',
  //     },
  //     desc: '按钮',
  //     children: [],
  //     parentId: 2,
  //   }, 2)
  // }, [])

  // setTimeout(() => {
  //  removeComponent(2)
  // }, 3000)
  // setTimeout(() => {
  //   updateComponentProps(1, { style: { width: '100%' } })

  // }, 4000)

  function renderComponents(components: Component[]):React.ReactNode {
    return components.map((component) => {
      const config = componentConfig?.[component.name]
      if (!config?.component) { // 没有对应的组件, 比如: 'page'
        return null
      }
      // 渲染组件
      return React.createElement(
        config.component,
        {
          key: component.id,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || []), // 递归渲染整个 json 树
      )
    })
  }

  return (
    <div>
      <div>
        {renderComponents(components)}
      </div>
      {/* <pre>
        {
          JSON.stringify(components, null, 2)
        }
      </pre> */}
      
    </div>
  )
}
