import { auth } from '../firebase';

export default function Home() {
  const logOut = () => {
    auth.signOut();
  };
  return <button onClick={logOut}>log Out</button>;
}
