import NoticeService from "../services/NoticeService.js";

const NoticeController = {
  async getAllNotices(req, res) {
    try {
      const notices = await NoticeService.getAllNotices();
      res.status(200).json(notices);
    } catch (error) {
      console.error("Erro ao obter as notícias:", error);
      res.status(500).send("Erro ao obter as notícias");
    }
  },

  async getNoticeById(req, res) {
    const id = req.params.id;
    try {
      const notice = await NoticeService.getNoticeById(id);
      if (!notice) {
        res.status(404).send("Notícia não encontrada");
        return;
      }
      res.status(200).json(notice);
    } catch (error) {
      console.error("Erro ao obter a notícia:", error);
      res.status(500).send("Erro ao obter a notícia");
    }
  },

  async createNotice(req, res) {
    const notice = req.body;
    try {
      const newNotice = await NoticeService.createNotice(notice);
      res.status(201).json(newNotice);
    } catch (error) {
      console.error("Erro ao criar a notícia:", error);
      res.status(500).send("Erro ao criar a notícia");
    }
  },

  async updateNotice(req, res) {
    const id = req.params.id;
    const notice = req.body;
    try {
      const updatedNotice = await NoticeService.updateNotice(id, notice);
      res.status(200).json(updatedNotice);
    } catch (error) {
      console.error("Erro ao atualizar a notícia:", error);
      res.status(500).send("Erro ao atualizar a notícia");
    }
  },

  async deleteNotice(req, res) {
    const id = req.params.id;
    try {
      await NoticeService.deleteNotice(id);
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar a notícia:", error);
      res.status(500).send("Erro ao deletar a notícia");
    }
  },
};
export default NoticeController;
