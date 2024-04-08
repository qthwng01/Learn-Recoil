import { selector } from 'recoil'
import { todoListAtom } from './todoListAtom'

export const todoListValue = selector({
  key: 'TodoValue',
  get: ({ get }) => ({
    total: get(todoListAtom).length,
    isCompleted: get(todoListAtom).filter((todo) => todo.isCompleted).length,
    unCompleted: get(todoListAtom).filter((todo) => !todo.isCompleted).length
  }),
})
