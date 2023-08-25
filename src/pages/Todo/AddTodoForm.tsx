import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useCallback, useState } from 'react';

import { createTodo } from '../../services/todoInstance';
import { TodoType } from './todo.d';
import { StyledTodoForm } from './AddTodoForm.styled';

interface Props {
  setTodoList: Dispatch<SetStateAction<TodoType[]>>;
}

export const AddTodoForm = ({ setTodoList }: Props) => {
  const [todoTitle, setTodoTitle] = useState('');
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createTodo(todoTitle).then((res) => {
        setTodoList((prev) => [...prev, res]);
      });
      setTodoTitle('');
    },
    [todoTitle, setTodoList]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  }, []);

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일 제목을 입력하세요'
        data-testid='new-todo-input'
        value={todoTitle}
        onChange={handleChange}
      />
      <button disabled={todoTitle.length === 0} data-testid='new-todo-add-button'>
        추가
      </button>
    </StyledTodoForm>
  );
};
