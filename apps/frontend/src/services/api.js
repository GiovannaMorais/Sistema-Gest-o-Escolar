import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001',
})

export const getStudentById = (id) => api.get(`/students/${id}`)

export const createUser = async (payload) => {
  try {
    console.log(payload);

    const response = await api.post('/user', payload);
    return response;
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
};
////////////////////////////////////////
export const getAllEmployee = async () => api.get('/users')

export const createExam = async (payload) => {
  try {
    const response = await api.post('/exam', payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const updateExam = async (id, payload) => {
  try {
    const response = await api.put(`/exam/${id}`, payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const deleteExam = async (id) => {
  try {
    const response = await api.delete(`/exam/${id}`);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const getAllExams = async () => api.get('/exams')

////////////////////////////////////////

export const createNotice = async (payload) => {
  try {
    const response = await api.post('/notice', payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const updateNotice = async (id, payload) => {
  try {
    const response = await api.put(`/notice/${id}`, payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const deleteNotice = async (id) => {
  try {
    const response = await api.delete(`/notice/${id}`);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const getAllNotices = async () => api.get('/notices')

////////////////////////////////////////

export const createMaterial = async (payload) => {
  try {
    const response = await api.post('/material', payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const updateMaterial = async (id, payload) => {
  try {
    const response = await api.put(`/material/${id}`, payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const deleteMaterial = async (id) => {
  try {
    const response = await api.delete(`/material/${id}`);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const getAllMaterials = async () => api.get('/materials')

////////////////////////////////////////

export const createStudent = async (payload) => {
  try {
    const response = await api.post('/student', payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const updateStudent = async (id, payload) => {
  try {
    const response = await api.put(`/student/${id}`, payload);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const deleteStudent = async (id) => {
  try {
    const response = await api.delete(`/student/${id}`);
    return response;
  }
  catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}

export const getAllStudents = async () => api.get('/students')

export default api
