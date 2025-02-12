let monitorings = [
   {
      id: "1",
      courseId: "101",
      teacherId: "1",
      date: "2025-02-10T10:00:00-03:00", // Segunda-feira
      studentNames: [], // Nenhum aluno marcou ainda
   },
   {
      id: "2",
      courseId: "102",
      teacherId: "2",
      date: "2025-02-11T09:00:00-03:00", // Terça-feira
      studentNames: ["João Silva"], // Já marcada por João
   },
   {
      id: "3",
      courseId: "103",
      teacherId: "3",
      date: "2025-02-12T13:00:00-03:00", // Quarta-feira
      studentNames: [],
   },
];

module.exports = monitorings;
