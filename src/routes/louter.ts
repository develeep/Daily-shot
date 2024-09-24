import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout.tsx';
import Home from '../routes/home.tsx';
import Profile from '../routes/profile.tsx';
import Login from '../routes/login.tsx';
import CreateAccount from '../routes/create-account.tsx';
import ProtectedRoute from '../components/protected-route.tsx';
import ForgetPassword from '../routes/forget-password.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <protectedRoute>
        <Layout />
      </protectedRoute>
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
