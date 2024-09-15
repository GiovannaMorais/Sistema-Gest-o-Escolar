import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 0 auto;
  width: 70%;
  height: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    padding: 0.875rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .divBotao {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .btnLimpar,
  .btnSalvar {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .subtituloForm {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: rgb(79, 81, 82);
  }

  input,
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  select {
    background-color: #fff;
    color: #000;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 2.5rem;
    position: relative;
  }

  option {
    color: #000;
  }

  select::after {
    content: "▼";
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #000;
  }

  .dados {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  .divs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: 30%;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      flex-direction: column;
      width: 100%;
    }
  }

  .inputNumber,
  .inputText,
  .inputSelect,
  .inputData,
  .inputSenha,
  .inputTextArea {
    width: 22rem;
    height: auto;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 4px;
    color: rgb(76, 68, 68);
    padding: 1.375rem;

    @media (max-width: 500px) {
      align-content: space-between;
      background-color: transparent;
    }
  }

  .inputSenha {
    width: 20rem;
    margin-left: -5px;
    padding-right: 40px;
    bottom: 0px;
  }

  .inputText:hover,
  .inputData:hover {
    cursor: pointer;
    border: 1px solid rgb(23, 201, 255);
  }

  .iconeInput {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
    width: 25px;
  }

  /* Botões */

  .divBotao {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .btnFechar,
  .btnSalvar,
  .btnLimpar {
    height: 100%;
    background: rgb(12, 86, 146);
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 15px;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 1.075rem;
  }

  .btnSalvar,
  .btnLimpar {
    width: 18rem;
    height: 45%;
    background: green;
  }

  .btnLimpar {
    background: rgb(12, 86, 146);
    margin-right: 2rem;
  }

  /* Hover botões */
  .btnFechar:hover,
  .btnLimpar:hover,
  .btnSalvar:hover {
    cursor: pointer;
  }

  .btnSalvar:hover {
    background: rgb(4, 90, 4);
  }

  .btnLimpar:hover {
    background: rgb(5, 53, 93);
  }
`;


export const ContainerTable = styled.main`
  display: flex;
  width: 80%;
  margin: 10vh auto;
  justify-content: center;
  background: #fff;
`;


export const Table = styled.table`
  width: 100%;
  font-size: 16px;
  color: #333; // Cor padrão para o texto da tabela

  thead {
    background-color: #053b71; // Cor de fundo da linha do cabeçalho
  }

  th,
  td {
    padding: 16px;
    border-bottom: 1px solid #ddd; // Borda mais sutil entre as linhas
  }

  tbody tr:hover {
    background-color: #f1f1f1; // Destaque a linha ao passar o mouse
  }

  button {
    background-color: #053b71;
    color: #fff;
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    cursor: pointer;
    border-radius: 4px;
  }

  button:hover {
    background-color: #041f46; // Cor de fundo mais escura ao passar o mouse
  }
`;

export const TableHeader = styled.th`
  font-weight: bold;
  color: white;
`;

export const TableData = styled.td`
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd; // Separar as células com uma borda leve
  &:hover {
    background-color: #f1f1f1; // Destaque ao passar o mouse sobre a célula
  }

  .divBtn {
    display: flex;
    width: 100%;
    justify-content: center;

    button {
      min-width: 30%;
    }
  }

  .btnExcluir {
    background: rgb(216, 21, 21);
  }
  .btnEditar {
    background: #1e90ff;
  }

  .btnNovo {
    width: 100px;
    height: 60%;
    background: green;
  }

  .btnEditar:hover,
  .btnExcluir:hover,
  .btnNovo:hover {
    cursor: pointer;
  }

  .btnEditar:hover {
    background: #0a5aab;
  }

  .btnExcluir:hover {
    background: darkred;
  }

  .btnNovo:hover {
    background: rgb(5, 80, 5);
  }
`;
