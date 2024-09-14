import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const MaterialService = {

  async getAllMaterials() {
    try {
      const materials = await prisma.material.findMany();
      return materials;
    } catch (error) {
      console.error("Erro ao obter os materiais:", error);
      throw error;
    }
  },

  async getMaterialById(id) {
    try {
      const material = await prisma.material.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return material;
    } catch (error) {
      console.error("Erro ao obter o material:", error);
      throw error;
    }
  },

  async createMaterial(material) {
    try {
      const newMaterial = await prisma.material.create({
        data: material,
      });
      return newMaterial;
    } catch (error) {
      console.error("Erro ao criar o material:", error);
      throw error;
    }
  },

  async updateMaterial(id, material) {
    try {
      const updatedMaterial = await prisma.material.update({
        where: {
          id: parseInt(id),
        },
        data: material,
      });
      return updatedMaterial;
    } catch (error) {
      console.error("Erro ao atualizar o material:", error);
      throw error;
    }
  },

  async deleteMaterial(id) {
    try {
      const deletedMaterial = await prisma.material.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedMaterial;
    } catch (error) {
      console.error("Erro ao deletar o material:", error);
      throw error;
    }
  }

}

export default MaterialService
