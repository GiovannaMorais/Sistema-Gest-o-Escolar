import React, { useEffect, useState } from "react";

import Form from "../../../components/Forms";
import alunoFields from "../../../utils/FormFields/alunoFields";
import {
  Container,
  ContainerTable,
  Table,
  TableData,
  TableHeader,
  ButtonContainer,
  Button,
} from "./styles";

import { toast } from "react-toastify";

import {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} from "../../../services/api";

export default function Alunos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllStudents();
        if (response.data.length === 0) {
          setIsModalOpen(true);
        } else {
          setStudents(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar provas:", error);
        setIsModalOpen(true);
      }
    };

    fetchExams();
  }, []);

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  const handleDelete = async (student) => {
    try {
      const response = await deleteStudent(Number(student.id));
      if (response.status === 200) {
        toast.success("Estudante removido com sucesso");
        const updatedStudents = await getAllStudents();
        setStudents(updatedStudents.data);
      } else {
        toast.error(response.data.message);
      }
      setCurrentStudent(null);
      setStudents(students.filter((e) => e.id !== student.id));
    } catch (error) {
      toast.error("Erro ao remover o estudante: " + error.message);
    }
  };

  const handleSubmit = async (formData) => {
    console.log('formData', formData);
    setIsModalOpen(false);
    const student = {
      name: formData.nome,
      birthDate: new Date(formData.dataNascimento),
      motherName: formData.nomeMae,
      city: formData.cidade,
      school: formData.escola,
      class: formData.turma,
      raNumber: formData.ra,
      enrollmentNumber: formData.matricula,
      gender: formData.sexo.toUpperCase(),
      email: formData.email,
      password: formData.senha,
      role: "STUDENT",
    }
    try {
      let response;
      if (currentStudent) {
        response = await updateStudent(Number(currentStudent.id), student);
        if (response.status === 200) {
          toast.success("Estudante atualizado com sucesso");
        } else {
          toast.error(response.data.message);
        }
      } else {
        response = await createStudent(student);
        if (response.status === 201) {
          toast.success("Estudante criado com sucesso");
        } else {
          toast.error(response.data.message);
        }
      }
      setCurrentStudent(null);
      const updatedStudents = await getAllStudents();
      setStudents(updatedStudents.data);
    } catch (error) {
      toast.error("Erro ao salvar a prova: " + error.message);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Container>
          <Form
            formFields={alunoFields}
            onSubmit={handleSubmit}
            initialValues={currentStudent}
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
              <TableHeader>Nome</TableHeader>
              <TableHeader>Turma</TableHeader>
              <TableHeader>RA</TableHeader>
              <TableHeader>Matrícula</TableHeader>
              {students.length !== 0 && <TableHeader>Ação</TableHeader>}
            </tr>
          </thead>
          <tbody>
            {students.map((user) => (
              <tr key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.name}</TableData>
                <TableData>{user.class}</TableData>
                <TableData>{user.raNumber}</TableData>
                <TableData>{user.enrollmentNumber}</TableData>
                <TableData>
                  <div className="divBtn">
                    <button
                      className="btnEditar"
                      onClick={() => handleEdit(user)}
                    >
                      Editar
                    </button>
                    <button
                      className="btnExcluir"
                      onClick={() => handleDelete(user)}
                    >
                      Remover
                    </button>
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
