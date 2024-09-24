import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { SocialBtn, Logo } from './auth-components';

export default function GoogleBtn() {
  const navigator = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigator('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SocialBtn onClick={onClick}>
      <Logo src="/google.svg" />
      Google로 시작하기
    </SocialBtn>
  );
}
