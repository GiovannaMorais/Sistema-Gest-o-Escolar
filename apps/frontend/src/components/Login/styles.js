import styled from 'styled-components';

const gray900 = '#1A1A1D';
const purple = '#6A0DAD';
const white = '#FFFFFF';
const lightGray = '#F3F3F3';
const inputBackground = '#262626';


export const RoleSelect = styled.select`
  background-color: ${inputBackground};
  border: 1px solid ${purple};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
  color: ${white};
  font-size: 1rem;
  outline: none;

  &:focus {
    background-color: ${gray900};
    border-color: ${white};
  }

  option {
    background-color: ${inputBackground};
    color: ${white};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

// Container principal do login, centralizando o formulário
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${gray900}; // Fundo escuro elegante
`;

// Formulário estilizado para login
export const LoginForm = styled.form`
  background-color: ${lightGray};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

// Título principal (h1)
export const Title = styled.h1`
  color: ${purple};
  font-size: 2rem;
  margin-bottom: 10px;
`;

// Subtítulo descritivo (h2)
export const Subtitle = styled.h2`
  color: ${gray900};
  font-size: 1rem;
  margin-bottom: 30px;
`;

// Campo de entrada para usuário e senha
export const LoginInput = styled.input`
  background-color: ${inputBackground};
  border: 1px solid ${purple};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
  color: ${white};
  font-size: 1rem;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  outline: none;

  &:focus {
    background-color: ${gray900};
  }
`;

// Botão de login
export const LoginButton = styled.button`
  background-color: ${purple};
  border: none;
  border-radius: 4px;
  padding: 15px;
  color: ${white};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${gray900};
  }
`;

// Botão de alternância entre login e cadastro
export const SwitchButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${purple};
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: ${gray900};
  }
`;
