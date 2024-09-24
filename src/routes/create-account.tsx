import { FieldValues, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
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

export default function CreateAccount() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    setError,
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data: FieldValues) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, {
        displayName: data.name,
      });
      navigate('/');
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError('firebaseError', {
          type: 'custom',
          message:
            err.message === 'Firebase: Error (auth/email-already-in-use).'
              ? '이미 존재하는 이메일입니다.'
              : err.message,
        });
      }
    }
  };
  return (
    <Wrapper>
      <Tittle>Join Daily Shot</Tittle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="name"
          type="text"
          {...register('name', { required: '이름은 필수입니다.' })}
        ></Input>
        {errors.name && <Error>{errors.name.message?.toString()}</Error>}
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
          value={isSubmitting ? 'loading' : 'create account'}
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
        계정이 이미 있으신가요? <Link to="/login">로그인하기</Link>
      </Switcher>
    </Wrapper>
  );
}
