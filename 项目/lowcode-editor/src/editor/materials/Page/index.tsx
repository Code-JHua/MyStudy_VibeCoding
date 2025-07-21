import { useDrop } from 'react-dnd'
import { message } from 'antd'
import { useComponentsStore } from '../../stores/components'
import type { CommonComponentProps } from '../../interface'
import { useComponentConfigStore } from '../../stores/component-config'

export default function Page({ id, name, children }: CommonComponentProps) {
  const [messageApi, contextHolder] = message.useMessage()
  const { addComponent } = useComponentsStore()
  const {componentConfig} = useComponentConfigStore()


  const [{ canDrop }, dropRef] = useDrop(() => ({
    accept: ['Button', 'Container'],
    drop(item: { type: string }) {
      messageApi.success(item.type)
      // 真的拖拽了一个组件名到 EditArea, 就要将这个名字对应的组件对象植入到 json 中
      const props = componentConfig?.[item.type]?.defaultProps
      addComponent({
        id: new Date().getTime(),
        name: item.type,
        props: props,
      },id)
    },
    collect: (monitor) => ({ // 接收
      canDrop: monitor.canDrop(),
    }),                               
  }))
  return (
    <>
      {contextHolder}
      <div ref={dropRef} className="p-[20px] h-[100%] box-border" style={{border: canDrop ? '1px solid #1890ff' : 'none'}}>
        {children}
      </div>
    </>
  )
}
