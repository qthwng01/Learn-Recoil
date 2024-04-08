import { selector } from 'recoil'
import { todoListAtom } from './todoListAtom'
import { filterTodoListAtom } from './filterTodoListAtom'

export const filterTodoListValue = selector({
  key: 'FilterTodoListValue',
  get: ({ get }) => {
    const filterValue = get(filterTodoListAtom)
    const list = get(todoListAtom)

    switch (filterValue) {
      case 'completed':
        return list.filter((item) => item.isCompleted)
      case 'unCompleted':
        return list.filter((item) => !item.isCompleted)
      default:
        return list
    }
  },
})
