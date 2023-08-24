import { useState } from 'react';

import { TodoType } from './todo.d';
import { TodoElement } from './TodoElement';

import StyledTodoContainer from './Todo.styled';
import { AddTodoForm } from './AddTodoForm';

export default function TodoPage() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  return (
    <StyledTodoContainer>
      <AddTodoForm setTodoList={setTodoList} />
      <ul className='todo-list'>
        {todoList.map((todo) => (
          <TodoElement key={todo.id} todo={todo} setTodoList={setTodoList} />
        ))}
      </ul>
    </StyledTodoContainer>
  );
}
