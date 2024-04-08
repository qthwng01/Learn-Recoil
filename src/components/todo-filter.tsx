import { useRecoilState } from 'recoil'
import { Label } from './ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { filterTodoListAtom } from '@/recoil/filterTodoListAtom'

const TodoFilter = () => {
  const [_, setFilterValue] = useRecoilState(filterTodoListAtom)

  // handle filter
  const handleFilter = (value: string) => {
    setFilterValue(value)
  }

  return (
    <div className="mt-4 flex align-middle justify-center items-center">
      <Label htmlFor="terms" className="mr-2">
        Filter
      </Label>
      <Select onValueChange={handleFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="unCompleted">Not completed</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default TodoFilter
