import styled from 'styled-components';

export const SignContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  .sign__title {
    width: 50%;
    height: 100%;
    line-height: 30px;
    font-size: 36px;

    color: white;
    background-color: #18c37d;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .sign__form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sign__inputs {
      width: 50%;
      height: 150px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      position: relative;

      .sign__input {
        width: 100%;
        height: 30px;
        margin-bottom: 5px;
      }

      .sign__button {
        width: 110px;
        height: 30px;
        background-color: #18c37d;
        color: white;
        border: none;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        right: -5px;
        /* cursor: pointer; */
      }
    }
  }
`;
