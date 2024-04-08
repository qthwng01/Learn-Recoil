import React, { useState, useEffect } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '@/recoil/todoListAtom'
import { v4 } from 'uuid'

const TodoAdd = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useRecoilState(todoListAtom)

  const addItem = () => {
    setTodos([
      ...todos,
      {
        id: v4(),
        name: inputValue,
        isCompleted: false,
      },
    ])
    setInputValue('')
  }

  // save to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <React.Fragment>
      
      <div className="mt-5 flex align-middle justify-center">
        <Input
          className="w-80 mr-2"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add something..."
        />
        <Button onClick={addItem}>Add</Button>
      </div>
    </React.Fragment>
  )
}

export default TodoAdd
