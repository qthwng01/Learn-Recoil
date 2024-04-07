import { useRecoilState } from 'recoil'
import { listCartState } from '../recoil/useCartState'
import { cartAtom } from '../recoil/cartState'

const Cart = () => {
  const [data, _] = useRecoilState(cartAtom)

  return (
    <div>
      <h2>Các anime đã chọn</h2>
      <ul role="list" className="px-10 divide-y divide-gray-100">
        {data?.map((item) => (
          <li key={item.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.anime}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.character}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{item.anime}</p>
              <p className="w-96 mt-1 text-right text-xs leading-5 text-gray-500 line-clamp-6">{item.quote}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
