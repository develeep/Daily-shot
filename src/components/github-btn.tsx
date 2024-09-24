import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { SocialBtn, Logo } from './auth-components';

export default function GithubBtn() {
  const navigator = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigator('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SocialBtn onClick={onClick}>
      <Logo src="/github.svg" />
      github로 시작하기
    </SocialBtn>
  );
}
