import { FirebaseError } from 'firebase/app';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Input,
  Tittle,
  Wrapper,
  Error,
  Switcher,
  Form,
  Text,
} from '../components/auth-components';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

export default function ForgetPassword() {
  const [isSending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    setError,
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data: FieldValues) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setSending(true);
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
      <Tittle>Reset Password</Tittle>
      {isSending ? (
        <Text>이메일을 전송하였습니다.</Text>
      ) : (
        <>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="이메일을 입력해 주세요"
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
              name="submit"
              type="submit"
              value={isSubmitting ? 'loading' : 'reset password'}
              disabled={!isValid}
            ></Input>
          </Form>
          {errors.firebaseError && (
            <Error>{errors.firebaseError.message?.toString()}</Error>
          )}
        </>
      )}
      <Switcher>
        <Link to="/login">로그인 페이지로 돌아가기</Link>
      </Switcher>
    </Wrapper>
  );
}
