import { create } from 'zustand'

const useComponentsStore = create((set) => ({
  // 数据
  mode: 'edit',
  // 方法
  setMode: (type: any) => {
    return set(() => ({ mode: type }))
  }
}))

export default useComponentsStore