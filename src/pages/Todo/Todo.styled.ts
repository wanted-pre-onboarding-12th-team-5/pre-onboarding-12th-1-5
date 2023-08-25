import { styled } from 'styled-components';

const StyledTodoContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .todo-list {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default StyledTodoContainer;
