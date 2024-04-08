import { atom } from 'recoil'

export const filterTodoListAtom = atom({
  key: 'FilterTodoListAtom',
  default: 'all',
})
