import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <div>
      {todos.map((todo, index) => {
        const doneInfo = (
          <div>
            <span>This todo is done</span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
            </span>
          </div>
        )

        const notDoneInfo = (
          <div>
            <span>
              This todo is not done
            </span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
              <button onClick={onClickComplete(todo)}> Set as done </button>
            </span>
          </div>
        )

        return (
          <div key={todo.id || index}>
            <Todo item={todo} notDoneInfo={notDoneInfo} doneInfo={doneInfo} />
          </div>
        )
      })}
    </div>
  )
}

export default TodoList