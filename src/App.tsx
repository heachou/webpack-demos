import React, { useState, useCallback, memo, Fragment } from 'react'
import './assets/style/index.css'
import './assets/style/index.less'
import cls from 'classnames'

type FormElem = React.FormEvent<HTMLFormElement>
type InputElem = React.ChangeEvent<HTMLInputElement>

interface ITodo {
  text: string
  complete: boolean
}

function App() {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const onChange = useCallback((e: InputElem): void => {
    setValue(e.target.value)
  }, [])
  const handleSubmit = useCallback(
    (e: FormElem): void => {
      e.preventDefault()
      addTodo(value)
      setValue('')
    },
    [value]
  )

  const addTodo = useCallback(
    (text: string): void => {
      const newTodos: ITodo[] = [...todos, { text, complete: false }]
      setTodos(newTodos)
    },
    [todos]
  )

  const completeTodo = useCallback(
    (index: number): void => {
      const newTodos: ITodo[] = [...todos]
      newTodos[index].complete = !newTodos[index].complete
      setTodos(newTodos)
    },
    [todos]
  )
  const removeToDo = useCallback(
    (index: number): void => {
      const newTodos: ITodo[] = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    },
    [todos]
  )
  return (
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={onChange} value={value} />
        <button type="submit">add</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div className="item">
              <div className={cls('text', { complete: todo.complete })}>
                {todo.text}
              </div>
              <div className="button-box">
                <button type="button" onClick={() => completeTodo(index)}>
                  {todo.complete ? 'incomplete' : 'complete'}
                </button>
                <button className="delete-btn" type="button" onClick={() => removeToDo(index)}>
                  delete
                </button>
              </div>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  )
}

export default memo(App)
