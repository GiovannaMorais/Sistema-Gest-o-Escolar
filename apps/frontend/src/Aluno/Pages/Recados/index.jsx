import React, { useEffect, useState } from "react";


import {
  ContainerTable,
  Table,
  TableHeader,
  TableData,
} from "./styles";

import {
  getAllNotices,
} from "../../../services/api";

import { formatDate } from "../../../utils/formatDate";

export default function Recados() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllNotices();
        if (response.data.length === 0) {
        } else {
          setNotices(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar recados:", error);
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
              <TableHeader>Hora</TableHeader>
              <TableHeader>Evento</TableHeader>
            </tr>
          </thead>
          <tbody>
            {notices.length !== 0 &&
              notices.map((notice) => (
                <tr key={notice.id}>
                  <TableData>{formatDate(notice.date)}</TableData>
                  <TableData>{notice.time}</TableData>
                  <TableData>{notice.title}</TableData>
                </tr>
              ))}
          </tbody>
        </Table>
      </ContainerTable>
    </>
  );
}
