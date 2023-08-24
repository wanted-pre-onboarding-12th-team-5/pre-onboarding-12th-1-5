import { styled } from 'styled-components';

export const StyledTodoElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;

  & > label > input {
    margin-right: 12px;
  }

  .todo-input {
    border-bottom: 1px solid black;
    width: 240px;
    color: black;
  }

  .todo-button {
    background-color: #c8c8c8;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 12px;
    border-radius: 5px;
    color: white;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      background-color: #e0e0e0;
    }
  }
`;
