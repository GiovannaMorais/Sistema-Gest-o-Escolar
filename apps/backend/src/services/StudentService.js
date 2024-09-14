import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const StudentService = {
  async getAllStudents() {
    try {
      const students = await prisma.student.findMany();
      return students;
    } catch (error) {
      console.error("Erro ao obter os estudantes:", error);
      throw error;
    }
  },

  async createStudent(student) {
    try {
      const {
        name,
        birthDate,
        motherName,
        city,
        school,
        class: studentClass,
        raNumber,
        enrollmentNumber,
        gender,
        email,
        password,
      } = student;

      // Validação de entrada
      if (
        !name ||
        !birthDate ||
        !motherName ||
        !city ||
        !school ||
        !studentClass ||
        !raNumber ||
        !enrollmentNumber ||
        !gender ||
        !email ||
        !password
      ) {
        throw new Error("Todos os campos são obrigatórios.");
      }

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("Email já está em uso");
      }

      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Criar usuário relacionado
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role: "STUDENT",
          student: {
            create: {
              name,
              birthDate,
              motherName,
              city,
              school,
              class: studentClass,
              raNumber,
              enrollmentNumber,
              gender,
            },
          },
        },
      });

      return newUser;
    } catch (error) {
      console.error("Erro ao criar o estudante:", error.message);
      throw new Error("Erro ao criar o estudante: " + error.message);
    }
  },

  async getStudentById(id) {
    try {
      const student = await prisma.student.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return student;
    } catch (error) {
      console.error("Erro ao obter o estudante:", error);
      throw error;
    }
  },

  async getStudentByClass(studentClass) {
    try {
      const students = await prisma.student.findMany({
        where: {
          class: studentClass,
        },
      });
      return students;
    } catch (error) {
      console.error("Erro ao obter os estudantes:", error);
      throw error;
    }
  },

  async updateStudent(id, studentData) {
    try {
      const updatedStudent = await prisma.student.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name: studentData.name,
          birthDate: studentData.birthDate,
          motherName: studentData.motherName,
          city: studentData.city,
          school: studentData.school,
          class: studentData.class,
          raNumber: studentData.raNumber,
          enrollmentNumber: studentData.enrollmentNumber,
          gender: studentData.gender,
          user: {
            update: {
              email: studentData.email,
              password: studentData.password,
              role: studentData.role,
            },
          },
          classes: studentData.classes,
        },
      });
      return updatedStudent;
    } catch (error) {
      console.error("Erro ao atualizar o estudante:", error);
      throw error;
    }
  },

  async deleteStudent(id) {
    try {
      const student = await prisma.student.delete({
        where: {
          id: parseInt(id),
        },
        include: {
        user: true, // Incluir o usuário relacionado
      },
      });
       await prisma.user.delete({
      where: {
        id: student.userId,
      },
    });

    return student;
    } catch (error) {
      console.error("Erro ao deletar o estudante:", error);
      throw error;
    }
  },
};

export default StudentService;
