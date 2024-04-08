import { atom } from 'recoil'
import { ITodo } from '@/types'

export const todoListAtom = atom<ITodo[]>({
  key: 'TodoList',
  default: (() => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : ([] as ITodo[])
  })(),
})
