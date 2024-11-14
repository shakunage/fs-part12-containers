import React from 'react'
import { render, screen } from '@testing-library/react'
import {expect, test} from '@jest/globals';
import Todo from '../../src/Todos/Todo'

describe('Todo Component', () => {
  const mockTodo = {
    text: 'Test Todo',
    done: false
  }

  const mockDoneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button>Delete</button>
      </span>
    </>
  )

  const mockNotDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button>Delete</button>
        <button>Set as done</button>
      </span>
    </>
  )

  test('renders not done info when todo is not completed', () => {
    render(<Todo item={mockTodo} notDoneInfo={mockNotDoneInfo} doneInfo={mockDoneInfo} />)
    expect(screen.getByText('This todo is not done')).not.toBeNull()
    expect(screen.getByText('Set as done')).not.toBeNull()
  })

  test('renders done info when todo is completed', () => {
    mockTodo.done = true
    render(<Todo item={mockTodo} notDoneInfo={mockNotDoneInfo} doneInfo={mockDoneInfo} />)
    expect(screen.getByText('This todo is done')).not.toBeNull()
    expect(screen.queryByText('Set as done')).toBeNull()
  })
})
