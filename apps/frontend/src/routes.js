import { useEffect, useState } from 'react';

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


import NotasFaltasAluno from './Aluno/Pages/NotasFaltas';
import ProvasAluno from './Aluno/Pages/Provas';
import RecadosAluno from './Aluno/Pages/Recados';
import MateriasAluno from './Aluno/Pages/Materias';

const PrivateRoute = ({ element, role, ...rest }) => {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
    } else {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    }
  }, [user]);


  const localUser = JSON.parse(localStorage.getItem('user'));

  if (!localUser || localUser === 'undefined' || localUser === null) {
    return <Navigate to='/login' />;
  }


  if (role && (!localUser.role || localUser.role !== role)) {
    return <Navigate to='/error' />;
  }

  return element;
};

export default PrivateRoute;

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterForm />}/>
      <Route path='/error' element={<ErrorPage />} />
      <Route path='/' element={<PrivateRoute element={<MainPage />} role="funcionario" />}>
        <Route index element={<Menu />} />
        <Route path='alunos' element={<Alunos />} />
        <Route path='notas-faltas' element={<NotasFaltas />} />
        <Route path='provas' element={<Provas />} />
        <Route path='recados' element={<Recados />} />
        <Route path='materiais' element={<Materias />} />
      </Route>

      <Route path='/aluno' element={<PrivateRoute element={<MainPage />} role="aluno" />}>
        <Route index path='menu' element={<Menu />} />
        <Route path='notas-faltas' element={<NotasFaltasAluno />} />
        <Route path='provas' element={<ProvasAluno />} />
        <Route path='recados' element={<RecadosAluno />} />
        <Route path='materiais' element={<MateriasAluno />} />
      </Route>
    </Routes>
  );
}
