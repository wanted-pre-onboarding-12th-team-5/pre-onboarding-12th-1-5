import { styled } from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .home__title {
    width: 50%;
    height: 100%;
    line-height: 36px;
    font-size: 30px;

    color: white;
    background-color: #18c37d;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .home__links {
    width: 50%;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .home__link {
      width: 240px;
      line-height: 60px;
      text-align: center;
      text-decoration: none;
      color: white;
      background-color: #18c37d;
      border-radius: 10px;

      &:hover {
        color: #18c37d;
        border: 1px solid #18c37d;
        background-color: white;
      }
    }
  }
`;

export default HomeContainer;
