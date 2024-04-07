import React from 'react'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../recoil/cartState'
import { IAnimeProps } from '../types'
import { Link } from 'react-router-dom'

const anime: IAnimeProps[] = [
  {
    id: 6277,
    quote: "That's it! My head as a trampoline is where I draw the line!",
    anime: 'Yu Yu Hakusho',
    character: 'Kazuma Kuwabara',
  },
  {
    id: 4131,
    quote: "Tears are how our heart speaks when your lips cannot describe how much we've been hurt.",
    anime: 'Fairy Tail',
    character: 'Jellal Fernandes',
  },
  {
    id: 5249,
    quote:
      "Urushibara Ruka. The mannerisms and voice of a woman... No. More feminine than ANY woman. But he's a guy. Taller than Mayuri, but so very thin... But he's a guy. Looks great in a miko outfit... But he's a guy. It's already twilight and yet, it's so hot. The cicadas are crying. But... He's a guy.",
    anime: 'Steins;Gate',
    character: 'Okabe Rintarou',
  },
  {
    id: 3922,
    quote: 'In the darkness, hope is something you give yourself.',
    anime: 'Avatar: The Last Airbender',
    character: 'Zuko',
  },
  {
    id: 3174,
    quote: "It's sad when people die.",
    anime: 'Another',
    character: 'Mei Misaki',
  },
  {
    id: 395,
    quote:
      "Love. I myself have never loved another person.  Most likely, I don't even love myself.  I do have knowledge of it.  But I am incapable of determining whether or not it is vital in my life.",
    anime: 'Durarara!!',
    character: 'Vorona',
  },
  {
    id: 4708,
    quote: "Whatever you value... What you consider right is up to you. But don't force those ideals onto other people.",
    anime: 'Nisemonogatari',
    character: 'Yozuru Kagenui',
  },
  {
    id: 959,
    quote: 'If the dark sky is me, then the sparkling stars are Tsubaki.',
    anime: 'Soul Eater',
    character: 'Black Star',
  },
  {
    id: 1236,
    quote:
      'Let’s say I posed this question to you: “Can all human souls be bought with money or not?” Now remember, the keyword here is “all”. The answer is “There are times when you can buy them, and other times, not,” right? The human being… sometimes he’ll uphold his pride and conscience even if he’s offered ten billion yen, and other times he’ll murder someone over one yen.',
    anime: 'Durarara!!×2 Shou',
    character: 'Izaya Orihara',
  },
  {
    id: 138,
    quote:
      'A city far away from my homeland.  There, after becoming acquainted with strangers, have I changed, perhaps?  That uncontrollable impulse I harbored within me...Has it faded away now, I wonder? What exactly am I doing here in this city?',
    anime: 'Durarara!!',
    character: 'Vorona',
  },
]

const ListAnime: React.FC = () => {
  //const [data, setData] = useState<IAnimeProps[]>([])
  const [_, setAnime] = useRecoilState(cartAtom)

  //   useEffect(() => {
  //     const getData = async () => {
  //       const res = await fetch('https://animechan.xyz/api/quotes')
  //       if (!res.ok) {
  //         return console.log('Error fetching')
  //       } else {
  //         const data = await res.json()
  //         setData(data)
  //         console.log(data)
  //       }
  //     }
  //     getData()
  //   }, [])

  const handleSelect = (id: number) => {
    const selectedItem = anime?.find((item) => item.id === id)
    if (selectedItem) {
      setAnime((prevAnime) => [...prevAnime, selectedItem])
    }
  }

  return (
    <React.Fragment>
      <h2 className="mt-[40px] text-center text-lg font-medium">Danh sách Anime</h2>
      <Link to={'/cart'}>Xem danh sách đã chọn</Link>
      <ul role="list" className="px-10 divide-y divide-gray-100">
        {anime?.map((item) => (
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
            <button onClick={() => handleSelect(item.id)}>Chọn</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ListAnime
