import { createContext, useContext, useState } from "react";
import { getAllEmployee, getAllStudents } from "../services/api";

import bcrypt from "bcryptjs";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const employees = await getAllEmployee();
    const students = await getAllStudents();

    if (employees.data.length === 0) {
      alert("Não há funcionários cadastrados!");
      return null;
    }

    const employee = employees.data.find(
      (employee) => employee.email === email && employee.role === "EMPLOYEE"
    );
    const student = employees.data.find((student) => student.email === email && student.role === "STUDENT");


    if (student) {
      const isMatch = await bcrypt.compare(password, student.password);
      if (isMatch) {
        const name = localStorage.getItem("socialName");
        const userData = { email, role: "aluno", name };
        setUser(userData);
        return userData;
      } else {
        alert("Senha incorreta!");
        return null;
      }

    }

    if (employee) {
      const isMatch = await bcrypt.compare(password, employee.password);
      if (isMatch) {
         const name = localStorage.getItem("socialName");
        const userData = { email, role: "funcionario", name };
        setUser(userData);
        return userData;
      } else {
        alert("Senha incorreta!");
        return null;
      }
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
