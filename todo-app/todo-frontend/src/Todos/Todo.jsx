import React from 'react'

const Todo = ({item, doneInfo, notDoneInfo}) => {

      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
          <span>
            {item.text} 
          </span>
          {item.done ? doneInfo : notDoneInfo}
        </div>
      )
}

export default Todo
