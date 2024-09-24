import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { auth } from './firebase.ts';
import styled, { ThemeProvider } from 'styled-components';
import Layout from './components/layout.tsx';
import Home from './routes/home.tsx';
import Profile from './routes/profile.tsx';
import Login from './routes/login.tsx';
import CreateAccount from './routes/create-account.tsx';
import GlobalStyle from './styles/globalStyles.ts';
import { Theme } from './styles/globalTheme.ts';
import LoadingPage from './components/LoadingPage.tsx';
import ProtectedRoute from './components/protected-route.tsx';
import ForgetPassword from './routes/forget-password.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
]);

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Wrapper>
          {isLoading ? <LoadingPage /> : <RouterProvider router={router} />}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
