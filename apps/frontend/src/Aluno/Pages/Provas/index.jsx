import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableData,
  ContainerTable,
} from "./styles";

import {getAllExams} from "../../../services/api";

import { formatDate } from "../../../utils/formatDate";


export default function Provas() {
  const [exams, setExams] = useState([]);


  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllExams();
        if (response.data.length === 0) {
        } else {
          setExams(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar provas:', error);
      }
    };

    fetchExams();
  }, []);




  return (
    <>
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <TableHeader>Data</TableHeader>
              <TableHeader>Disciplina</TableHeader>
              <TableHeader>Conteúdo</TableHeader>
            </tr>
          </thead>
          <tbody>
            {exams.length !== 0 &&
              exams.map((exam) => (
                <tr key={exam.id}>
                  <TableData>{formatDate(exam.date)}</TableData>
                  <TableData>{exam.subject}</TableData>
                  <TableData>{exam.topic}</TableData>
                </tr>
              ))}
          </tbody>
        </Table>
      </ContainerTable>
    </>
  );
}
