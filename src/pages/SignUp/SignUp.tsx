import useInput from '../../hooks/useInput';
import { SignContainer } from '../SignIn/SignIn.styled';

export default function SignUp() {
  const [email, setEmail, onChangeEmail, validatedByEmail] = useInput('', 'email');
  const [password, setPassword, onChangePassword, validatedByPassword] = useInput('', 'password');

  const isConfirmed = validatedByEmail && validatedByPassword;

  // 아래 함수에서 데이터 가져오는 작업
  // post: auth/signup

  const handleSignUpSubmit = () => {};

  return (
    <SignContainer>
      <h1 className='sign__title'>회원가입</h1>

      <form className='sign__form' onSubmit={handleSignUpSubmit}>
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
          <button
            className='sign__button'
            type='submit'
            data-testid='signup-button'
            disabled={isConfirmed ? false : true}
            style={{
              backgroundColor: isConfirmed ? '#18c37d' : 'gray',
              cursor: isConfirmed ? 'pointer' : 'not-allowed',
            }}
          >
            회원가입
          </button>
        </div>
      </form>
    </SignContainer>
  );
}
