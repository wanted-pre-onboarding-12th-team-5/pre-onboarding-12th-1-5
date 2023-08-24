import { Link } from 'react-router-dom';
import HomeContainer from './Home.styled';

function Home() {
  return (
    <HomeContainer>
      <h1 className='home__title'>
        원티드 프리온보딩
        <br /> 사전과제
      </h1>

      <div className='home__links'>
        {['signin', 'signup'].map((to) => (
          <Link className='home__link' to={`${to}`}>
            {to === 'signin' ? '로그인' : '회원가입'}
          </Link>
        ))}
      </div>
    </HomeContainer>
  );
}

export default Home;
