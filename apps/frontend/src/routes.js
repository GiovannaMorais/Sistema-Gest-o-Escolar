import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import MainPage from './pages/Main';
import NotasFaltas from './pages/Main/NotasFaltas';
import Provas from './pages/Main/Provas';
import Recados from './pages/Main/Recados';
import Materias from './pages/Main/Materias';
import Alunos from './pages/Main/Alunos';
import Menu from './pages/Main/Menu';

import Login from './components/Login';
import RegisterForm from './components/Login/RegisterForm';
import ErrorPage from './components/ErrorPage';

const PrivateRoute = ({ element, role, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }

  if (role && user.role !== role) {
    return <Navigate to='/error' />;
  }

  return element;
};

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterForm />}/>
      <Route path='/error' element={<ErrorPage />} />
      <Route path='/' element={<PrivateRoute element={<MainPage />} role="funcionario" />}>
        <Route path='/' element={<Menu />} />
        <Route path='/alunos' element={<Alunos />} />
        <Route path='/notas-faltas' element={<NotasFaltas />} />
        <Route path='/provas' element={<Provas />} />
        <Route path='/recados' element={<Recados />} />
        <Route path='/materiais' element={<Materias />} />
      </Route>
    </Routes>
  );
}
