import { FieldValues, useForm } from 'react-hook-form';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  Wrapper,
  Input,
  Tittle,
  Form,
  Switcher,
  Error,
  SocialWrap,
} from '../components/auth-components';
import GithubBtn from '../components/github-btn';
import GoogleBtn from '../components/google-btn';

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    setError,
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data: FieldValues) => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(credential);
      navigate('/');
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError('firebaseError', {
          type: 'custom',
          message:
            err.message === 'Firebase: Error (auth/invalid-login-credentials).'
              ? '이메일, 또는 패스워드가 다릅니다.'
              : err.message,
        });
      }
    }
  };
  return (
    <Wrapper>
      <Tittle>Login Daily Shot</Tittle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="example@email.com"
          type="email"
          {...register('email', {
            required: '이메일은 필수입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식에 맞지않습니다.',
            },
          })}
        ></Input>
        {errors.email && <Error>{errors.email.message?.toString()}</Error>}
        <Input
          placeholder="password"
          type="password"
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '8자리 이상 비밀번호를 사용하세요.',
            },
          })}
        ></Input>
        {errors.password && (
          <Error>{errors.password.message?.toString()}</Error>
        )}
        <Input
          name="submit"
          type="submit"
          value={isSubmitting ? 'loading' : 'login'}
          disabled={!isValid}
        ></Input>
      </Form>
      {errors.firebaseError && (
        <Error>{errors.firebaseError.message?.toString()}</Error>
      )}
      <SocialWrap>
        <GithubBtn />
        <GoogleBtn />
      </SocialWrap>
      <Switcher>
        <Link to="/forget-password">비밀번호를 잊어버리셨나요?</Link>
        <Link to="/create-account">계정 생성하러 가기</Link>
      </Switcher>
    </Wrapper>
  );
}
