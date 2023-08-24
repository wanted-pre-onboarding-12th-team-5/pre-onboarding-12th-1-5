import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

import { deleteTodo, updateTodo } from 'services/todoInstance';
import { Todo } from './todo.d';

import { StyledTodoElement } from './TodoElement.styled';

interface Props {
  todo: Todo;
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoElement = ({ todo, setTodoList }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState(todo.todo);

  const handleChangeCheckbox = useCallback(() => {
    updateTodo(todo.id, todo.todo, !todo.isCompleted).then((data) => {
      setTodoList((prev) => prev.map((element) => (element.id === todo.id ? data : element)));
    });
  }, [todo, setTodoList]);

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  }, []);

  const handleClickModify = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleClickSubmitModify = useCallback(() => {
    updateTodo(todo.id, newTodoTitle, todo.isCompleted).then((data) => {
      setTodoList((prev) => prev.map((element) => (element.id === todo.id ? data : element)));
      setIsEditing(false);
    });
  }, [todo, newTodoTitle, setTodoList]);

  const handleClickCancelModify = useCallback(() => {
    setIsEditing(false);
    setNewTodoTitle(todo.todo);
  }, [todo]);

  const handleClickDelete = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteTodo(todo.id).then(() => {
        setTodoList((prev) => prev.filter((element) => element.id !== todo.id));
      });
    }
  }, [setTodoList, todo]);

  if (isEditing)
    return (
      <StyledTodoElement>
        <label>
          <input type='checkbox' checked={todo.isCompleted} onChange={handleChangeCheckbox} />
        </label>
        <input
          type='text'
          value={newTodoTitle}
          data-testid='modify-input'
          onChange={handleChangeInput}
          className='todo-input'
        />
        <button
          disabled={newTodoTitle.length <= 0}
          data-testid='submit-button'
          onClick={handleClickSubmitModify}
          className='todo-button'
        >
          제출
        </button>
        <button data-testid='cancel-button' onClick={handleClickCancelModify} className='todo-button'>
          취소
        </button>
      </StyledTodoElement>
    );

  return (
    <StyledTodoElement>
      <label>
        <input type='checkbox' checked={todo.isCompleted} onChange={handleChangeCheckbox} />
        <span className='text-slate-600'>{todo.todo}</span>
      </label>
      <button data-testid='modify-button' onClick={handleClickModify} className='todo-button'>
        수정
      </button>
      <button data-testid='delete-button' onClick={handleClickDelete} className='todo-button'>
        삭제
      </button>
    </StyledTodoElement>
  );
};
