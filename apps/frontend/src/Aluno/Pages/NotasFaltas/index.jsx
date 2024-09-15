import React, { useEffect, useMemo, useState } from "react";

import {
  ContainerTable,
  Table,
  TableData,
  TableHeader,
} from "./styles";


export default function NotasFaltas() {

    const NF = useMemo(() => [
    {id: 1, aluno: "João",  turma: '3Y',},
    {id: 2, aluno: "Maria",  turma: '2Y',}
  ],[]);


  return (
    <>
        <ContainerTable>
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Aluno</TableHeader>
              <TableHeader>Turma</TableHeader>
            </tr>
          </thead>
          <tbody>
            {NF.map((user) => (
              <tr key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.aluno}</TableData>
                <TableData>{user.turma}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
      </>
  )
}
