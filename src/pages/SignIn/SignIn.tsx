import { FormEvent } from 'react';
import useInput from '../../hooks/useInput';
import { SignContainer } from './SignIn.styled';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/todoInstance';
import { AxiosError } from 'axios';

export default function SignIn() {
  const [email, setEmail, onChangeEmail, validatedByEmail] = useInput('', 'email');
  const [password, setPassword, onChangePassword, validatedByPassword] = useInput('', 'password');
  const navigate = useNavigate();

  const isConfirmed = validatedByEmail && validatedByPassword;

  // 아래 함수에서 데이터 가져오는 작업
  // axios+post: auth/signin
  // 라우팅 처리

  const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn(email, password);
      console.log(response);
      if (response.status === 200) {
        alert('로그인에 성공했습니다. \n투두리스트 화면으로 이동합니다.');
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/todo');
      } else {
        alert(response);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.response?.data);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <SignContainer>
      <h1 className='sign__title'>로그인</h1>

      <form className='sign__form' onSubmit={handleSignInSubmit}>
        <div className='sign__inputs'>
          <input
            className='sign__input'
            data-testid='email-input'
            type='email'
            id='email'
            placeholder='이메일'
            value={email}
            onChange={onChangeEmail}
            required
          />
          {validatedByEmail || email === '' ? null : <span style={{ color: '#18c37d' }}>이메일 틀림</span>}
          <input
            className='sign__input'
            data-testid='password-input'
            type='password'
            id='password'
            placeholder='비밀번호'
            value={password}
            onChange={onChangePassword}
            required
          />
          {validatedByPassword || password === '' ? null : <span style={{ color: '#18c37d' }}>패스워드 틀림</span>}
          <button
            className='sign__button'
            type='submit'
            data-testid='signin-button'
            disabled={isConfirmed ? false : true}
            style={{
              backgroundColor: isConfirmed ? '#18c37d' : 'gray',
              cursor: isConfirmed ? 'pointer' : 'not-allowed',
            }}
          >
            로그인
          </button>
        </div>
      </form>
    </SignContainer>
  );
}
