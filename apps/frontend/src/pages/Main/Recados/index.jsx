import React, { useEffect, useState } from "react";

import Form from "../../../components/Forms";
import recadoFields from "../../../utils/FormFields/recadoFields.js";

import {
  ContainerTable,
  Table,
  TableHeader,
  TableData,
  Container,
  Button,
  ButtonContainer,
} from "./styles";

import {
  createNotice,
  getAllNotices,
  deleteExam,
  updateNotice,
} from "../../../services/api";
import { toast } from "react-toastify";

import { formatDate } from "../../../utils/formatDate";

export default function Recados() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notices, setNotices] = useState([]);
  const [currentNotice, setCurrentNotice] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllNotices();
        if (response.data.length === 0) {
          setIsModalOpen(true);
        } else {
          setNotices(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar recados:", error);
        setIsModalOpen(true);
      }
    };

    fetchExams();
  }, []);

  const handleEdit = (notice) => {
    setCurrentNotice(notice);
    setIsModalOpen(true);
  };

  const handleDelete = async (notice) => {
    try {
      const response = await deleteExam(Number(notice.id));
      if (response.status === 200) {
        toast.success("Recado removido com sucesso");
        const updatedNotices = await getAllNotices();
        setNotices(updatedNotices.data);
      } else {
        toast.error(response.data.message);
      }
      setCurrentNotice(null);
      setNotices(notices.filter((e) => e.id !== notice.id));
    } catch (error) {
      toast.error("Erro ao remover o recado: " + error.message);
    }
  };


  const handleSubmit = async (formData) => {
    setIsModalOpen(false);

    const notice = {
      date: new Date(formData.data),
      title: formData.titulo,
      content: formData.recado,
      time: formData.horario,
      employeeId: null,
    };

    try {
      let response;
      if (currentNotice) {
        response = await updateNotice(Number(currentNotice.id), notice);
        if (response.status === 200) {
          toast.success("Recado atualizada com sucesso");
        } else {
          toast.error(response.data.message);
        }
      } else {
        response = await createNotice(notice);
        if (response.status === 201) {
          toast.success("Recado criada com sucesso");
        } else {
          toast.error(response.data.message);
        }
      }
      setCurrentNotice(null);
      const updatedNotices = await getAllNotices();
      setNotices(updatedNotices.data);
    } catch (error) {
      toast.error("Erro ao salvar o recado: " + error.message);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Container>
          <Form
            formFields={recadoFields}
            onSubmit={handleSubmit}
            initialValues={currentNotice}
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
              <TableHeader>Hora</TableHeader>
              <TableHeader>Evento</TableHeader>
              {notices.length !== 0 && <TableHeader>Ação</TableHeader>}
            </tr>
          </thead>
          <tbody>
            {notices.length !== 0 &&
              notices.map((notice) => (
                <tr key={notice.id}>
                  <TableData>{notice.id}</TableData>
                  <TableData>{formatDate(notice.date)}</TableData>
                  <TableData>{notice.time}</TableData>
                  <TableData>{notice.title}</TableData>
                  <TableData>
                    <div className="divBtn">
                      <button
                        className="btnEditar"
                        onClick={() => handleEdit(notice)}
                      >
                        Editar
                      </button>
                      <button
                        className="btnExcluir"
                        onClick={() => handleDelete(notice)}
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
