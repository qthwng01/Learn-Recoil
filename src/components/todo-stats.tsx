import { Badge } from '@/components/ui/badge'
import { useRecoilValue } from 'recoil'
import { todoListValue } from '@/recoil/todoListValue'

const TodoStats = () => {
  const todosValue = useRecoilValue(todoListValue)

  return (
    <div className="mt-4 flex align-middle justify-center items-center">
      <Badge>Total: {todosValue ? todosValue.total : 0}</Badge>
      <Badge variant="outline">Completed: {todosValue ? todosValue.isCompleted : 0}</Badge>
      <Badge variant="secondary">Not completed: {todosValue ? todosValue.unCompleted : 0}</Badge>
    </div>
  )
}

export default TodoStats
