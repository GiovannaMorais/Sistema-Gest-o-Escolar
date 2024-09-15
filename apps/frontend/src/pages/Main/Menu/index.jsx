import { NavLink } from "react-router-dom";

import { Container } from "./styles";

import alunosIcon from "../../../assets/Funcionario/aluna.png";
import notasFaltasIcon from "../../../assets/Funcionario/iconNota.png";
import provaIcon from "../../../assets/Funcionario/iconProvas.png";
import materiaIcon from "../../../assets/Funcionario/material-escolar.png";
import notficacaoIcon from "../../../assets/Funcionario/notificacao.png";

import SkeletonSnack from "../../../components/SkeletonSnack";

import { useAuth } from "../../../hooks/useAuth";

export default function Menu() {
  const { user } = useAuth();
  console.log("user", "user", user);

  let data = [
    {
      name: "ALUNO",
      image: alunosIcon,
      description: "Aqui você pode inserir, editar e exlcuir dados de um aluno",
      pageTo: "alunos",
    },
    {
      name: "NOTAS/FALTAS",
      image: notasFaltasIcon,
      description: "Aqui você pode inserir, editar e exlcuir dados de um aluno",
      pageTo: "notas-faltas",
    },
    {
      name: "PROVAS",
      image: provaIcon,
      description: "Aqui você pode inserir, editar e exlcuir dados de um aluno",
      pageTo: "provas",
    },
    {
      name: "RECADOS",
      image: notficacaoIcon,
      description: "Aqui você pode inserir, editar e exlcuir dados de um aluno",
      pageTo: "recados",
    },
    {
      name: "MATERIAIS",
      image: materiaIcon,
      description: "Aqui você pode inserir, editar e exlcuir dados de um aluno",
      pageTo: "materiais",
    },
  ];

const localUser = JSON.parse(localStorage.getItem("user"));

if ((user && user.role === "aluno") || (localUser && localUser.role === "aluno")) {
  data = data.filter((item) => item.name !== "ALUNO");
}
  return (
    <Container>
      {!data.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : data.map((option) => {
            return (
              <NavLink
                to={`${option.pageTo}`}
                key={option.name}
                className="option"
              >
                <h2>{option.name}</h2>
                <img src={option.image} alt={option.name} />
                <p>{option.description}</p>
              </NavLink>
            );
          })}
    </Container>
  );
}
