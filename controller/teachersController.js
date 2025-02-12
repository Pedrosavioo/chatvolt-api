const teachers = require("../data/teachers");

class TeacherController {
   // Listar todos os professores
   getAllTeachers(req, res) {
      res.status(200).json(teachers);
   }

   // Buscar um professor por ID
   getTeacherById(req, res) {
      const { id } = req.params;
      const teacher = teachers.find(teacher => teacher.id === id);

      if (!teacher) {
         return res.status(404).json({ message: "Professor não encontrado." });
      }

      res.status(200).json(teacher);
   }

   // Criar um novo professor
   createTeacher(req, res) {
      const { id, name, courses } = req.body;

      // Verificar se o professor com o mesmo ID já existe
      if (teachers.some(teacher => teacher.id === id)) {
         return res.status(400).json({ message: "ID do professor já existe." });
      }

      const newTeacher = { id, name, courses: courses || [] };
      teachers.push(newTeacher);

      res.status(201).json({ message: "Professor criado com sucesso!", teacher: newTeacher });
   }

   // Atualizar um professor existente
   updateTeacher(req, res) {
      const { id } = req.params;
      const { name, courses } = req.body;

      const teacherIndex = teachers.findIndex(teacher => teacher.id === id);

      if (teacherIndex === -1) {
         return res.status(404).json({ message: "Professor não encontrado." });
      }

      if (name) teachers[teacherIndex].name = name;
      if (courses) teachers[teacherIndex].courses = courses;

      res.status(200).json({ message: "Professor atualizado com sucesso!", teacher: teachers[teacherIndex] });
   }

   // Deletar um professor
   deleteTeacher(req, res) {
      const { id } = req.params;

      const teacherIndex = teachers.findIndex(teacher => teacher.id === id);

      if (teacherIndex === -1) {
         return res.status(404).json({ message: "Professor não encontrado." });
      }

      const deletedTeacher = teachers.splice(teacherIndex, 1);

      res.status(200).json({ message: "Professor deletado com sucesso!", teacher: deletedTeacher[0] });
   }
}

module.exports = new TeacherController();
