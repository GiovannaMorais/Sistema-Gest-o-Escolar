import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Container } from "./styles";

import menuImg from "../../assets/menu.svg";

import { ReactComponent as AlunoIcon } from "../../assets/tampao-de-alunos.svg";
import { ReactComponent as NotasFaltasIcon } from "../../assets/iconNotas.svg";
import { ReactComponent as ProvasIcon } from "../../assets/iconProva.svg";
import { ReactComponent as RecadosIcon } from "../../assets/iconSino.svg";
import { ReactComponent as MateriasIcon } from "../../assets/iconLapis.svg";

export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

const reloadPage = (route) => {
  if (window.location.pathname === route) {
    // window.location.reload();
    return;
  } else {
    navigate(route);
  }
};


  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="Abrir e Fechar o Menu" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/alunos" onClick={() => reloadPage('/alunos')}>
              <AlunoIcon />
              <span>Aluno</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="notas-faltas" onClick={() => reloadPage('/notas-faltas')}>
              <NotasFaltasIcon />
              <span>Notas/Faltas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="provas"onClick={() => reloadPage('/provas')}>
              <ProvasIcon />
              <span>Provas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="recados"onClick={() => reloadPage('/recados')}>
              <RecadosIcon />
              <span>Recados</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="materiais"onClick={() => reloadPage('/materiais')}>
              <MateriasIcon />
              <span>Matérias</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
