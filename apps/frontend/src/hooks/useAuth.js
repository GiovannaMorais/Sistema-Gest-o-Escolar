import { createContext, useContext, useState } from 'react';
import { getAllEmployee } from '../services/api';

import bcrypt from 'bcryptjs';

const AuthContext = createContext();

export function AuthProvider({ children }) {
const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simulação de autenticação com diferentes usuários
    const employees = await getAllEmployee();

    if (employees.data.length === 0) {
      alert('Não há funcionários cadastrados!');
      return null;
    }

    const employee = employees.data.find((employee) => employee.email === email);

    if (employee) {
      // Comparar a senha fornecida com a senha criptografada armazenada
      const isMatch = await bcrypt.compare(password, employee.password);
      if (isMatch) {
        const userData = { email, role: 'funcionario', name: employee.name };
        setUser(userData);
        return userData;
      } else {
        alert('Senha incorreta!');
        return null;
      }
    } else {
      alert('Funcionário não encontrado!');
      return null;
    }
  };


  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
