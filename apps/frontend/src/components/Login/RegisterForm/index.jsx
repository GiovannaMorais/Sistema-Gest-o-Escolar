import React, { useState } from "react";

import { createUser } from "../../../services/api";

import { toast } from "react-toastify";

import {
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginButton,
  Title,
  Subtitle,
  RoleSelect,
} from "../styles";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState('employee');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //   const handleRoleChange = (e) => {
  //   setRole(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
      role: "EMPLOYEE",
      employee: {
        name,
      },
    };

    try {
      const response = await createUser(user);
      console.log(response);

      if (response.status === 201) {
        toast.success("Usuário cadastrado com sucesso");
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Cadastre-se</Title>
        <Subtitle>Crie sua conta</Subtitle>
        <LoginInput
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
        <LoginInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <LoginInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* <RoleSelect value={role} onChange={handleRoleChange}>
          <option value="student">Estudante</option>
          <option value="employee">Funcionário</option>
        </RoleSelect> */}
        <LoginButton type="submit">Cadastrar</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default RegisterForm;
