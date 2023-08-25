import {useEffect, useState} from 'react';

import {TodoType} from './todo.d';
import {TodoElement} from './TodoElement';

import StyledTodoContainer from './Todo.styled';
import {AddTodoForm} from './AddTodoForm';
import {getTodos} from "../../services/todoInstance";

export default function TodoPage() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  useEffect(() => {
    /* 현재 Token값이 없어 무한 루프로 인한 주석처리
    getTodos().then((res) => {ㅌ
      setTodoList(res)
    });
     */
  }, []);

  return (
    <StyledTodoContainer>
      <AddTodoForm setTodoList={setTodoList}/>
      <ul className='todo-list'>
        {todoList.map((todo) => (
          <TodoElement key={todo.id} todo={todo} setTodoList={setTodoList}/>
        ))}
      </ul>
    </StyledTodoContainer>
  );
}
