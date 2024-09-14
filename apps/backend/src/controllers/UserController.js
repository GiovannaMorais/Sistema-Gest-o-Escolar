import UserService from "../services/UserService.js";

const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao obter os usuários:", error);
      res.status(500).send("Erro ao obter os usuários");
    }
  },

  async createUser(req, res) {
    const user = req.body;
    const response = await UserService.createUser(user);

    if (response.status === 201) {
      return res.status(201).json(response.data);
    } else {
      return res.status(response.status).json({ message: response.message });
    }
  },

  async getUserById(req, res) {
    const id = req.params.id;
    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        res.status(404).send("Usuário não encontrado");
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Erro ao obter o usuário:", error);
      res.status(500).send("Erro ao obter o usuário");
    }
  },

  async getUserByRole(req, res) {
    const role = req.params.role;
    try {
      const users = await UserService.getUserByRole(role);
      res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao obter os usuários:", error);
      res.status(500).send("Erro ao obter os usuários");
    }
  },

  async updateUser(req, res) {
    const id = req.params.id;
    const user = req.body;
    try {
      const updatedUser = await UserService.updateUser(id, user);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
      res.status(500).send("Erro ao atualizar o usuário");
    }
  },

  async deleteUser(req, res) {
    const id = req.params.id;
    try {
      await UserService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar o usuário:", error);
      res.status(500).send("Erro ao deletar o usuário");
    }
  },
};

export default UserController;
