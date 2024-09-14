import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const UserService = {
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      console.error("Erro ao obter os usuários:", error);
      throw error;
    }
  },

  async createUser(user) {
  try {
    const { email, password, role, employee } = user;
    const { name } = employee;

    // Validação de entrada
    if (!name || !email || !password || !role) {
      return { status: 400, message: "Todos os campos (name, email, password, role) são obrigatórios." };
    }

    console.log("Verificando se o usuário já existe com o email:", email);

    const userExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    console.log("Resultado da consulta userExists:", userExists);

    if (userExists) {
      return { status: 400, message: "Já existe um usuário com esse email." };
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Dados do usuário
    const userData = {
      email,
      password: hashedPassword,
      role,
      employee: {
        create: {
          name
        }
      }
    };

    const newUser = await prisma.user.create({
      data: userData,
      include: {
        employee: true
      }
    });

    return { status: 201, data: newUser };
  } catch (error) {
    console.error("Erro ao criar o usuário:", error.message);
    return { status: 500, message: "Erro ao criar o usuário: " + error.message };
  }
},

  async getUserById(id) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return user;
    } catch (error) {
      console.error("Erro ao obter o usuário:", error);
      throw error;
    }
  },

  async getUserByRole(role) {
    try {
      const users = await prisma.user.findMany({
        where: {
          role: role,
        },
      });
      return users;
    } catch (error) {
      console.error("Erro ao obter os usuários:", error);
      throw error;
    }
  },

  async updateUser(id, user) {
    try {
      const { name, email, password, role } = user;
      const updatedUser = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          email,
          password,
          role,
        },
      });
      return updatedUser;
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      const user = await prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });
      return user;
    } catch (error) {
      console.error("Erro ao deletar o usuário:", error);
      throw error;
    }
  },
};

export default UserService;
