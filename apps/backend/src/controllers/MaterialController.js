import MaterialService from "../services/MaterialService.js"

const MaterialController = {

  async getAllMaterials(req, res) {
    try {
      const materials = await MaterialService.getAllMaterials();
      res.status(200).json(materials);
    } catch (error) {
      console.error("Erro ao obter os materiais:", error);
      res.status(500).send("Erro ao obter os materiais");
    }
  },

  async getMaterialById(req, res) {
    const id = req.params.id;
    try {
      const material = await MaterialService.getMaterialById(id);
      if (!material) {
        res.status(404).send("Material não encontrado");
        return;
      }
      res.status(200).json(material);
    } catch (error) {
      console.error("Erro ao obter o material:", error);
      res.status(500).send("Erro ao obter o material");
    }
  },

  async createMaterial(req, res) {
    const material = req.body;
    try {
      const newMaterial = await MaterialService.createMaterial(material);
      res.status(201).json(newMaterial);
    } catch (error) {
      console.error("Erro ao criar o material:", error);
      res.status(500).send("Erro ao criar o material");
    }
  },

  async updateMaterial(req, res) {
    const id = req.params.id;
    const material = req.body;
    try {
      const updatedMaterial = await MaterialService.updateMaterial(id, material);
      res.status(200).json(updatedMaterial);
    } catch (error) {
      console.error("Erro ao atualizar o material:", error);
      res.status(500).send("Erro ao atualizar o material");
    }
  },

  async deleteMaterial(req, res) {
    const id = req.params.id;
    try {
      await MaterialService.deleteMaterial(id);
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar o material:", error);
      res.status(500).send("Erro ao deletar o material");
    }
  }


}


export default MaterialController
