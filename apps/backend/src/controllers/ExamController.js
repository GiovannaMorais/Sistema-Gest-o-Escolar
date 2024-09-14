import ExamService from "../services/ExamService.js"


const ExamController = {


  async getAllExams(req, res) {
    try {
      const exams = await ExamService.getAllExams();
      res.status(200).json(exams);
    } catch (error) {
      console.error("Erro ao obter os exames:", error);
      res.status(500).send("Erro ao obter os exames");
    }
  },

  async getExamById(req, res) {
    const id = req.params.id;
    try {
      const exam = await ExamService.getExamById(id);
      if (!exam) {
        res.status(404).send("Exame não encontrado");
        return;
      }
      res.status(200).json(exam);
    } catch (error) {
      console.error("Erro ao obter o exame:", error);
      res.status(500).send("Erro ao obter o exame");
    }
  },


  async getExamByClass(req, res) {
    const {class: studentClass} = req.body;
    try {
      const exam = await ExamService.getExamByClass(studentClass);
      if (!exam) {
        res.status(404).send("Exame não encontrado");
        return;
      }
      res.status(200).json(exam);
    } catch (error) {
      console.error("Erro ao obter o exame:", error);
      res.status(500).send("Erro ao obter o exame");
    }
  },

  async createExam(req, res) {
    const exam = req.body;
    try {
      const newExam = await ExamService.createExam(exam);
      res.status(201).json(newExam);
    } catch (error) {
      console.error("Erro ao criar o exame:", error);
      res.status(500).send("Erro ao criar o exame");
    }
  },

  async updateExam(req, res) {
    const id = req.params.id;
    const exam = req.body;
    console.log('exam', exam)
    try {
      const updatedExam = await ExamService.updateExam(id, exam);
      res.status(200).json(updatedExam);
    } catch (error) {
      console.error("Erro ao atualizar o exame:", error);
      res.status(500).send("Erro ao atualizar o exame");
    }
  },

  async deleteExam(req, res) {
    const id = req.params.id;
    try {
      await ExamService.deleteExam(id);
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar o exame:", error);
      res.status(500).send("Erro ao deletar o exame");
    }
  }


}


export default ExamController
