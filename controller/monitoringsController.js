const monitorings = require("../data/monitorings");

class MonitoringController {
   getAllMonitorings(req, res) {
      res.status(200).json(monitorings);
   }

   getMonitoringByName(req, res) {
      const { courseName } = req.params;
      const monitoring = monitorings.find(m => m.courseName === courseName);

      if (!monitoring) {
         return res.status(404).json({ message: "Monitoria não encontrada." });
      }

      res.status(200).json(monitoring);
   }

   // Criar uma nova monitoria (pode incluir alunos no início)
   createMonitoring(req, res) {
      const { id, courseName, date, studentNames = [] } = req.body;

      if (monitorings.some(m => m.courseName === courseName)) {
         return res.status(400).json({ message: "Monitoria para esse curso já existe." });
      }

      const newMonitoring = { id, courseName, date, studentNames };
      monitorings.push(newMonitoring);

      res.status(201).json({ message: "Monitoria criada com sucesso!", monitoring: newMonitoring });
   }

   // Adicionar um aluno a uma monitoria existente
   addStudentToMonitoring(req, res) {
      const { courseName } = req.params;
      const { studentName } = req.body;

      const monitoring = monitorings.find(m => m.courseName === courseName);
      if (!monitoring) {
         return res.status(404).json({ message: "Monitoria não encontrada." });
      }

      if (!studentName) {
         return res.status(400).json({ message: "Nome do aluno é obrigatório." });
      }

      // Verifica se o aluno já está marcado
      if (monitoring.studentNames.includes(studentName)) {
         return res.status(400).json({ message: "Aluno já está marcado para essa monitoria." });
      }

      monitoring.studentNames.push(studentName);

      res.status(200).json({ message: "Aluno adicionado com sucesso!", monitoring });
   }

   // Remover um aluno da monitoria
   removeStudentFromMonitoring(req, res) {
      const { courseName } = req.params;
      const { studentName } = req.body;

      const monitoring = monitorings.find(m => m.courseName === courseName);
      if (!monitoring) {
         return res.status(404).json({ message: "Monitoria não encontrada." });
      }

      const studentIndex = monitoring.studentNames.indexOf(studentName);
      if (studentIndex === -1) {
         return res.status(404).json({ message: "Aluno não encontrado nesta monitoria." });
      }

      monitoring.studentNames.splice(studentIndex, 1);

      res.status(200).json({ message: "Aluno removido com sucesso!", monitoring });
   }

   deleteMonitoring(req, res) {
      const { courseName } = req.params;

      const monitoringIndex = monitorings.findIndex(m => m.courseName === courseName);
      if (monitoringIndex === -1) {
         return res.status(404).json({ message: "Monitoria não encontrada." });
      }

      const deletedMonitoring = monitorings.splice(monitoringIndex, 1);
      res.status(200).json({ message: "Monitoria deletada com sucesso!", monitoring: deletedMonitoring[0] });
   }
}

module.exports = new MonitoringController();
