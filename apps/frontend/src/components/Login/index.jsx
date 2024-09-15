import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginButton,
  Title,
  Subtitle,
  SwitchButton,
} from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [socialName, setSocialName] = useState("");

  const [isRegistering, setIsRegistering] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = await login(email, password);
    if (user?.role === "funcionario" || localUser?.role === "funcionario") {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else if (user?.role === "aluno" || localUser?.role === "aluno") {
      navigate("/aluno/menu");
    }
    return;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Usuário cadastrado:", email);
    setIsRegistering(false);
    navigate("/register");
  };

  const handleName = () => {
    const name = prompt("Como você prefere ser chamado socialmente?");
    if (name) {
      localStorage.setItem("socialName", name);
      setSocialName(name);
    }
  };
  return (
    <LoginContainer>
      {isRegistering ? (
        <LoginForm onSubmit={handleRegister}>
          <Title>Cadastre-se</Title>
          <Subtitle>Crie sua conta</Subtitle>
          <LoginInput
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">Cadastrar</LoginButton>
          <SwitchButton onClick={() => setIsRegistering(false)}>
            Já tem uma conta? Faça login
          </SwitchButton>
        </LoginForm>
      ) : (
        <LoginForm onSubmit={handleLogin}>
          <Title>Bem-vindo!</Title>
          <Subtitle>Faça login para acessar sua conta</Subtitle>
          <LoginInput
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit" onClick={handleName}>
            Entrar
          </LoginButton>
          <SwitchButton onClick={() => setIsRegistering(true)}>
            Não tem uma conta? Cadastre-se
          </SwitchButton>
        </LoginForm>
      )
      }
    </LoginContainer>
  );
}
