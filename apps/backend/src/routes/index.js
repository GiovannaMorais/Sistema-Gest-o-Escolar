import express from 'express';
import UserController from '../controllers/UserController.js';
import StudentController from '../controllers/StudentController.js';
import MaterialController from '../controllers/MaterialController.js';
import ExamController from '../controllers/ExamController.js';
import NoticeController from '../controllers/NoticeController.js';

const app = express.Router();

app.post('/user', UserController.createUser);
app.get('/users', UserController.getAllUsers);
app.get('/user/:id', UserController.getUserById);
app.get('/users/:role', UserController.getUserByRole);
app.put('/user/:id', UserController.updateUser);
app.delete('/user/:id', UserController.deleteUser);

//////////////////////////////////////////////

app.get('/students', StudentController.getAllStudents);
app.get('/students/:class', StudentController.getStudentByClass);
app.get('/student/:id', StudentController.getStudentById);
app.post('/student', StudentController.createStudent);
app.put('/student/:id', StudentController.updateStudent);
app.delete('/student/:id', StudentController.deleteStudent);

//////////////////////////////////////////////

app.get('/materials', MaterialController.getAllMaterials);
// app.get('/materials/:class', MaterialController.getMaterialByClass);
app.get('/material/:id', MaterialController.getMaterialById);
app.post('/material', MaterialController.createMaterial);
app.put('/material/:id', MaterialController.updateMaterial);
app.delete('/material/:id', MaterialController.deleteMaterial);

//////////////////////////////////////////////

app.get('/exams', ExamController.getAllExams);
app.get('/exams/:class', ExamController.getExamByClass);
app.get('/exam/:id', ExamController.getExamById);
app.post('/exam', ExamController.createExam);
app.put('/exam/:id', ExamController.updateExam);
app.delete('/exam/:id', ExamController.deleteExam);

//////////////////////////////////////////////

app.get('/notices', NoticeController.getAllNotices);
app.get('/notice/:id', NoticeController.getNoticeById);
app.post('/notice', NoticeController.createNotice);
app.put('/notice/:id', NoticeController.updateNotice);
app.delete('/notice/:id', NoticeController.deleteNotice);


export default app;
