import { useComponentConfigStore } from '../../stores/component-config'
import {useMemo} from 'react'

export default function Material() {  
  const { componentConfig } = useComponentConfigStore()
  const components = useMemo(() => {
    return Object.values(componentConfig) // [{},{},{}]
  }, [componentConfig])
  
  return (
    <div>
      {
        components.map((item) => {
          return <div key={item.name} className='border-[1px] border-dashed border-black py-2 px-2 inline-block bg-white m-[10px] hover:bg-[#ccc]'>{item.name}</div>
        })
      }
    </div>
  )
}
