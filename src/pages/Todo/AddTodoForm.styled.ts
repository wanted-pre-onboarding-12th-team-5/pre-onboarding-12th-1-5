import { styled } from 'styled-components';

export const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;

  & > input {
    border-bottom: 1px solid black;
    width: 240px;
  }

  & > button {
    background-color: #c8c8c8;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 12px;
    border-radius: 5px;
    color: white;

    &:disabled {
      background-color: #e0e0e0;
    }
  }
`;
