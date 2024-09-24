import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout.tsx';
import Home from './routes/home.tsx';
import Profile from './routes/profile.tsx';
import Login from './routes/login.tsx';
import CreateAccount from './routes/create-account.tsx';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles.ts';
import { Theme } from './styles/globalTheme.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
    path: 'login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
