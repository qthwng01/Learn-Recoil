import { selector } from 'recoil'
import { cartAtom } from './cartState'

export const listCartState = selector({
  key: 'listCart',
  get: ({ get }) => {
    const data = get(cartAtom)
    return data
  },
})
