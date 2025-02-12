const courses = require("../data/courses");

class CourseController {
   // Listar todos os cursos
   getAllCourses(req, res) {
      res.status(200).json(courses);
   }

   // Buscar um curso por ID
   getCourseById(req, res) {
      const { id } = req.params;
      const course = courses.find(course => course.id === id);

      if (!course) {
         return res.status(404).json({ message: "Curso não encontrado." });
      }

      res.status(200).json(course);
   }

   // Criar um novo curso
   createCourse(req, res) {
      const { id, name } = req.body;

      // Verificar se o curso com o mesmo ID já existe
      if (courses.some(course => course.id === id)) {
         return res.status(400).json({ message: "ID do curso já existe." });
      }

      const newCourse = { id, name, teacherId };
      courses.push(newCourse);

      res.status(201).json({ message: "Curso criado com sucesso!", course: newCourse });
   }

   // Atualizar um curso existente
   updateCourse(req, res) {
      const { id } = req.params;
      const { name } = req.body;

      const courseIndex = courses.findIndex(course => course.id === id);

      if (courseIndex === -1) {
         return res.status(404).json({ message: "Curso não encontrado." });
      }

      // Atualiza apenas os campos fornecidos
      if (name) courses[courseIndex].name = name;
      if (teacherId) courses[courseIndex].teacherId = teacherId;

      res.status(200).json({ message: "Curso atualizado com sucesso!", course: courses[courseIndex] });
   }

   // Deletar um curso
   deleteCourse(req, res) {
      const { id } = req.params;

      const courseIndex = courses.findIndex(course => course.id === id);

      if (courseIndex === -1) {
         return res.status(404).json({ message: "Curso não encontrado." });
      }

      const deletedCourse = courses.splice(courseIndex, 1);

      res.status(200).json({ message: "Curso deletado com sucesso!", course: deletedCourse[0] });
   }
}

module.exports = new CourseController();
