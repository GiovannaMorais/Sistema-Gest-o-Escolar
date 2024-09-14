import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ExamService = {
  async getAllExams() {
    try {
      const exams = await prisma.exam.findMany();
      return exams;
    } catch (error) {
      console.error("Erro ao obter os exames:", error);
      throw error;
    }
  },

  async getExamById(id) {
    try {
      const exam = await prisma.exam.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return exam;
    } catch (error) {
      console.error("Erro ao obter o exame:", error);
      throw error;
    }
  },

  async getExamByClass(studentClass) {
    try {
      const exam = await prisma.exam.findMany({
        where: {
          class: studentClass,
        },
      });
      return exam;
    } catch (error) {
      console.error("Erro ao obter o exame:", error);
      throw error;
    }
  },

  async createExam(exam) {
    try {
      const newExam = await prisma.exam.create({
        data: exam,
      });
      return newExam;
    } catch (error) {
      console.error("Erro ao criar o exame:", error);
      throw error;
    }
  },

  async updateExam(id, exam) {
    try {
      if (!exam.date) {
        throw new Error("O campo 'date' não pode ser nulo.");
      }

      const updatedExam = await prisma.exam.update({
        where: {
          id: parseInt(id),
        },
        data: exam,
      });
      return updatedExam;
    } catch (error) {
      console.error("Erro ao atualizar o exame:", error);
      throw error;
    }
  },

  async deleteExam(id) {
    try {
      const deletedExam = await prisma.exam.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedExam;
    } catch (error) {
      console.error("Erro ao deletar o exame:", error);
      throw error;
    }
  },
};

export default ExamService;
