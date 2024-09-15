import React, { useEffect, useState } from "react";

import Form from "../../../components/Forms";
import materialFields from "../../../utils/FormFields/materialFields.js";
import {
  Container,
  ContainerTable,
  Table,
  TableData,
  TableHeader,
  ButtonContainer,
  Button,
} from "./styles";

import {
  createMaterial,
  getAllMaterials,
  updateMaterial,
  deleteMaterial,
} from "../../../services/api";

import { toast } from "react-toastify";

import { formattedTipoMaterial, desformatarTipoMaterial } from "../../../utils/formatString.js";

export default function Materias() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [currentMaterial, setCurrentMaterial] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllMaterials();
        if (response.data.length === 0) {
          setIsModalOpen(true);
        } else {
          setMaterials(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar materiais:", error);
        setIsModalOpen(true);
      }
    };

    fetchExams();
  }, []);

  const handleEdit = (material) => {
    setCurrentMaterial(material);
    setIsModalOpen(true);
  };

  const handleDelete = async (material) => {
    try {
      const response = await deleteMaterial(Number(material.id));
      if (response.status === 200) {
        toast.success("Material removido com sucesso");
        const updatedMaterials = await getAllMaterials();
        setMaterials(updatedMaterials.data);
      } else {
        toast.error(response.data.message);
      }
      setCurrentMaterial(null);
      setMaterials(materials.filter((e) => e.id !== material.id));
    } catch (error) {
      toast.error("Erro ao remover o material: " + error.message);
    }
  };

  const handleSubmit = async (formData) => {
    setIsModalOpen(false);
    const material = {
      name: formData.nomeMaterial,
      type: formattedTipoMaterial(formData.tipoMaterial),
      description: formData.descricaoMaterial,
      link: formData.link || null,
      employeeId: null,
      // employeeId:  user.employeeId || null,
    };

    try {
      let response;
      if (currentMaterial) {
        response = await updateMaterial(Number(currentMaterial.id), material);
        if (response.status === 200) {
          toast.success("Material atualizada com sucesso");
        } else {
          toast.error(response.data.message);
        }
      } else {
        response = await createMaterial(material);
        if (response.status === 201) {
          toast.success("Material criada com sucesso");
        } else {
          toast.error(response.data.message);
        }
      }
      setCurrentMaterial(null);
      const updatedExams = await getAllMaterials();
      setMaterials(updatedExams.data);
    } catch (error) {
      toast.error("Erro ao salvar o  material: " + error.message);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Container>
          <Form
            formFields={materialFields}
            onSubmit={handleSubmit}
            initialValues={currentMaterial}
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
              <TableHeader>Título</TableHeader>
              <TableHeader>Material</TableHeader>
              <TableHeader>Descrição</TableHeader>
              <TableHeader>Link</TableHeader>
              {materials.length !== 0 && <TableHeader>Ação</TableHeader>}
            </tr>
          </thead>
          <tbody>
            {materials.map((material) => (
              <tr key={material.id}>
                <TableData>{material.id}</TableData>
                <TableData>{material.name}</TableData>
                <TableData>{desformatarTipoMaterial(material.type)}</TableData>
                <TableData>{material.description}</TableData>
                {material.link ? (
                  <TableData>{material.link}</TableData>
                ) : (
                  <TableData style={{ color: "red", fontStyle: "italic" }}>
                    Não foi cadastrado
                  </TableData>
                )}
                <TableData>
                  <div className="divBtn">
                    <button
                      className="btnEditar"
                      onClick={() => handleEdit(material)}
                    >
                      Editar
                    </button>
                    <button
                      className="btnExcluir"
                      onClick={() => handleDelete(material)}
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
