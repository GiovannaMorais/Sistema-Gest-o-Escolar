import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const NoticeService = {

  async getAllNotices() {
    try {
      const notices = await prisma.notice.findMany();
      return notices;
    } catch (error) {
      console.error("Erro ao obter as notícias:", error);
      throw error;
    }
  },

  async getNoticeById(id) {
    try {
      const notice = await prisma.notice.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return notice;
    } catch (error) {
      console.error("Erro ao obter a notícia:", error);
      throw error;
    }
  },

  async createNotice(notice) {
    try {
      const newNotice = await prisma.notice.create({
        data: notice,
      });
      return newNotice;
    } catch (error) {
      console.error("Erro ao criar a notícia:", error);
      throw error;
    }
  },

  async updateNotice(id, notice) {
    try {
      const updatedNotice = await prisma.notice.update({
        where: {
          id: parseInt(id),
        },
        data: notice,
      });
      return updatedNotice;
    } catch (error) {
      console.error("Erro ao atualizar a notícia:", error);
      throw error;
    }
  },

  async deleteNotice(id) {
    try {
      const deletedNotice = await prisma.notice.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedNotice;
    } catch (error) {
      console.error("Erro ao deletar a notícia:", error);
      throw error;
    }
  }

}

export default NoticeService;
