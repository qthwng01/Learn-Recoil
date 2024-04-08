import { Checkbox } from '@/components/ui/checkbox'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoListAtom } from '@/recoil/todoListAtom'
import { filterTodoListValue } from '@/recoil/filterTodoListValue'
import TodoAdd from './todo-add'
import TodoStats from './todo-stats'
import TodoFilter from './todo-filter'

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoListAtom)
  const filteredTodos = useRecoilValue(filterTodoListValue)
  
  // handle check complete
  const checkCompleted = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: true,
          }
        }
        return todo
      })
    )
  }

  // handle delete
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="content">
      <TodoStats />
      <TodoFilter />
      <TodoAdd />
      <ul className="flex flex-col items-center justify-center mt-4">
        {filteredTodos?.map((item) => (
          <li className="py-2 w-[27%] flex justify-between" key={item.id}>
            <div className="inline-flex items-center w-[70%]">
              <Checkbox checked={item.isCompleted} onCheckedChange={() => checkCompleted(item.id)} className="mr-3" id="terms" />
              <span className={item.isCompleted ? 'mr-2 line-through' : 'mr-2'}>{item.name}</span>
            </div>
            <button
              className="w-[20%] border rounded-sm cursor-pointer mr-2 px-1 bg-red-500 text-white font-semibold"
              onClick={() => deleteTodo(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
