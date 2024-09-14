import React, { useEffect, useMemo, useState } from "react";

import Form from "../../../components/Forms";
import notasFaltasFields from "../../../utils/FormFields/notasFaltasFields.js";
import {
  Container,
  ContainerTable,
  Table,
  TableData,
  TableHeader,
} from "./styles";


export default function NotasFaltas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData) => {
    console.log(formData);
  };


    const NF = useMemo(() => [
    {id: 1, aluno: "João",  turma: '3Y',},
    {id: 2, aluno: "Maria",  turma: '2Y',}
  ],[]);

    useEffect(() => {
    const renderPage = () => {
      if (NF.length !== 0) {
        setIsModalOpen(false);
      } else {
        setIsModalOpen(true)
      }
    };

    renderPage();
  }, [NF]);

  return (
    <>
      { isModalOpen && (
        <Container>
        <Form
          formFields={notasFaltasFields}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
        /></Container>
      )}

        <ContainerTable>
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Aluno</TableHeader>
              <TableHeader>Turma</TableHeader>
              {NF.length !== 0 && <TableHeader>Ação</TableHeader>}
            </tr>
          </thead>
          <tbody>
            {NF.map((user) => (
              <tr key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.aluno}</TableData>
                <TableData>{user.turma}</TableData>
                <TableData>
                  <div className="divBtn">
                    <button className="btnEditar" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="btnExcluir">Remover</button>
                  </div>
                </TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
      </>
  )
}
