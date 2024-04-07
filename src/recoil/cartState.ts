import { atom } from 'recoil'
import { IAnimeProps } from '../types'

export const cartAtom = atom({
  key: 'cartAtom',
  default: [] as IAnimeProps[],
})
