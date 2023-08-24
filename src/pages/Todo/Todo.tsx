import { useState } from 'react';

import { TodoType } from './todo.d';
import { deleteTodo } from '../../services/todoInstance';
import { TodoElement } from './TodoElement';

import StyledTodoContainer from './Todo.styled';

export default function TodoPage() {
  const [clickEnabled, setClickEnabled] = useState(true);
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const todoDeleteHandler = async (todoId: number) => {
    if (clickEnabled) {
      const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
      if (confirmDelete) {
        setClickEnabled(false);
        await deleteTodo(todoId).then(() => {
          setTodoList((prev) => prev.filter((element) => element.id !== todoId));
          setClickEnabled(true);
        });
      }
    }
  };

  return (
    <StyledTodoContainer>
      <ul className='todo-list'>
        {todoList.map((todo) => (
          <TodoElement key={todo.id} todo={todo} setTodoList={setTodoList} onDelete={todoDeleteHandler} />
        ))}
      </ul>
    </StyledTodoContainer>
  );
}
