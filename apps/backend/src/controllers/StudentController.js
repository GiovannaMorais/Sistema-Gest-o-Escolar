import StudentService from "../services/StudentService.js";

const StudentController = {

  async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      console.error("Erro ao obter os estudantes:", error);
      res.status(500).send("Erro ao obter os estudantes");
    }
  },

  async createStudent(req, res) {
    const student = req.body;
    try {
      const newStudent = await StudentService.createStudent(student);
      res.status(201).json(newStudent);
    } catch (error) {
      console.error("Erro ao criar o estudante:", error);
      res.status(500).send("Erro ao criar o estudante");
    }
  },

  async getStudentById(req, res) {
    const id = req.params.id;
    try {
      const student = await StudentService.getStudentById(id);
      if (!student) {
        res.status(404).send("Estudante não encontrado");
        return;
      }
      res.status(200).json(student);
    } catch (error) {
      console.error("Erro ao obter o estudante:", error);
      res.status(500).send("Erro ao obter o estudante");
    }
  },

  async getStudentByClass(req, res) {
    const studentClass = req.params.class;
    try {
      const students = await StudentService.getStudentByClass(studentClass);
      res.status(200).json(students);
    } catch (error) {
      console.error("Erro ao obter os estudantes:", error);
      res.status(500).send("Erro ao obter os estudantes");
    }
  },

  async updateStudent(req, res) {
    const id = req.params.id;
    const student = req.body;
    try {
      const updatedStudent = await StudentService.updateStudent(id, student);
      res.status(200).json(updatedStudent);
    } catch (error) {
      console.error("Erro ao atualizar o estudante:", error);
      res.status(500).send("Erro ao atualizar o estudante");
    }
  },

  async deleteStudent(req, res) {
    const id = req.params.id;
    try {
      await StudentService.deleteStudent(id);
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar o estudante:", error);
      res.status(500).send("Erro ao deletar o estudante");
    }
  }

}

export default StudentController;
