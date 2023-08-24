import useInput from '../../hooks/useInput';
import StyledTodoContainer from './Todo.styled';

export type ITodo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export default function Todo() {
  const [modifiedTodo, , onChangeModifiedTodo] = useInput('', 'modifiedTodo');
  const [todo, setTodo, onChangeTodo] = useInput('', 'todo');

  const handleSubmitTodo = () => {};

  return (
    <StyledTodoContainer>
      <h1 className='todo__title'>투두리스트</h1>
      <div className='todo__wrapper'>
        <form className='todo__form' onSubmit={handleSubmitTodo}>
          <input
            className='todo__input--todo'
            onChange={onChangeTodo}
            data-testid='new-todo-input'
            value={todo}
            type='text'
            placeholder='할 일을 입력하세요.'
          />
          <button className='todo__button--add' type='submit' data-testid='new-todo-add-button'>
            추가
          </button>
        </form>
      </div>

      {/* ToDoList 구현 영역 */}
    </StyledTodoContainer>
  );
}
