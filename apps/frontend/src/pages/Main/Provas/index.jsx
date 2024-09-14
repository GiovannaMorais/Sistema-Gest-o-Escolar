import React, { useEffect, useState } from "react";

import Form from "../../../components/Forms";
import provasFields from "../../../utils/FormFields/provasFields";

import { formatDate } from "../../../utils/formatDate";

import {
  Table,
  TableHeader,
  TableData,
  Container,
  ContainerTable,
  Button, ButtonContainer
} from "./styles";

import { createExam, getAllExams, updateExam, deleteExam } from "../../../services/api";
import { toast } from "react-toastify";

export default function Provas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exams, setExams] = useState([]);
  const [currentExam, setCurrentExam] = useState(null);


  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllExams();
        if (response.data.length === 0) {
          setIsModalOpen(true);
        } else {
          setExams(response.data);
          setIsModalOpen(false);
        }
      } catch (error) {
        console.error('Erro ao buscar provas:', error);
        setIsModalOpen(true);
      }
    };

    fetchExams();
  }, []);

  const handleEdit = (exam) => {
    setCurrentExam(exam);
    setIsModalOpen(true);
  };

const handleDelete = async (exam) => {
    try {
      const response = await deleteExam(Number(exam.id));
      if (response.status === 200) {
        toast.success("Prova removida com sucesso");
        const updatedExams = await getAllExams();
        setExams(updatedExams.data);
      } else {
        toast.error(response.data.message);
      }
      setCurrentExam(null);
      setExams(exams.filter((e) => e.id !== exam.id));
    } catch (error) {
      toast.error("Erro ao remover a prova: " + error.message);
    }
  }


const handleSubmit = async (formData) => {
    setIsModalOpen(false);

    const exam = {
      date: new Date(formData.data),
      class: formData.turma,
      subject: formData.disciplina,
      topic: formData.materia,
      employeeId: null,
    };

    try {
      let response;
      if (currentExam) {
        response = await updateExam(Number(currentExam.id), exam);
        if (response.status === 200) {
          toast.success("Prova atualizada com sucesso");
        } else {
          toast.error(response.data.message);
        }
      } else {
        response = await createExam(exam);
        if (response.status === 201) {
          toast.success("Prova criada com sucesso");
        } else {
          toast.error(response.data.message);
        }
      }
      setCurrentExam(null);
      const updatedExams = await getAllExams();
      setExams(updatedExams.data);
    } catch (error) {
      toast.error("Erro ao salvar a prova: " + error.message);
    }
  };


  return (
    <>
      {isModalOpen && (
        <Container>
          <Form
            formFields={provasFields}
            onSubmit={handleSubmit}
            initialValues={currentExam}
            onClose={() => setIsModalOpen(false)}
          />
        </Container>
      )}
       <ButtonContainer>
        <Button onClick={() => setIsModalOpen(true)}>Novo</Button>
      </ButtonContainer>
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Data</TableHeader>
              <TableHeader>Turma</TableHeader>
              <TableHeader>Disciplina</TableHeader>
              {exams.length !== 0 && <TableHeader>Ação</TableHeader>}
            </tr>
          </thead>
          <tbody>
            {exams.length !== 0 &&
              exams.map((exam) => (
                <tr key={exam.id}>
                  <TableData>{exam.id}</TableData>
                  <TableData>{formatDate(exam.date)}</TableData>
                  <TableData>{exam.subject}</TableData>
                  <TableData>{exam.topic}</TableData>
                  <TableData>
                    <div className="divBtn">
                      <button className="btnEditar" onClick={() => handleEdit(exam)} >Editar</button>
                      <button className="btnExcluir" onClick={() => handleDelete(exam)}>Remover</button>
                    </div>
                  </TableData>
                </tr>
              ))}
          </tbody>
        </Table>
      </ContainerTable>
    </>
  );
}
