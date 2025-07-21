import { create } from 'zustand'
import Container from '../materials/Container'
import Button from '../materials/Button'

export interface ComponentConfig {
  name: string;
  defaultProps: Record<string, any>
  component: any
}

export interface State {
  componentConfig: { [key: string]: ComponentConfig }
}

export interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void
}

export const useComponentConfigStore = create<State & Action>(
  (set) => ({
    componentConfig: {
      Container: {
        name: 'Container',
        defaultProps: {},
        component: Container
      },
      Button: {
        name: 'Button',
        defaultProps: {},
        component: Button
      },
    },
      
      registerComponent: (name, componentConfig) => {
        set((state) => ({
          ...state,
          componentConfig: {
            ...state.componentConfig,
            [name]: componentConfig
          }
        }))
      }

    })
)