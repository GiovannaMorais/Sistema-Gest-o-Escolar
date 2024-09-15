import React, { useEffect, useState } from "react";

import {
  ContainerTable,
  Table,
  TableData,
  TableHeader,
} from "./styles";

import {
  getAllMaterials,
} from "../../../services/api";


import { formatDate } from "../../../utils/formatDate";

export default function Materias() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllMaterials();
        if (response.data.length === 0) {
        } else {
          setMaterials(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar materiais:", error);
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
              <TableHeader>Material</TableHeader>
              <TableHeader>Data de Aquisição</TableHeader>
              <TableHeader>Categoria</TableHeader>
              <TableHeader>Quantidade</TableHeader>
              <TableHeader>Condição</TableHeader>
              {materials.link && (<TableHeader>Link</TableHeader>)}
            </tr>
          </thead>
          <tbody>
            {materials.map((material) => (
              <tr key={material.id}>
                <TableData>{material.name}</TableData>
                <TableData>{formatDate(material.acquisitionDate)}</TableData>
                <TableData>{material.category}</TableData>
                <TableData>{material.quantity}</TableData>
                <TableData>{material.condition}</TableData>
                {material.link && (
                  <TableData>{material.link}</TableData>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
    </>
  );
}
