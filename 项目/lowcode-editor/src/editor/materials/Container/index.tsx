import type { PropsWithChildren } from 'react'
import { useDrop } from 'react-dnd'

export default function Container({ children }:PropsWithChildren) {
  return (
    <div className='border-[1px] border-black min-h-[100px] p-[20px]'>
      {children}
    </div>
  )
}
