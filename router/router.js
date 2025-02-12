const express = require("express");
const courses = require("./../data/courses.js");

const router = express.Router();

const Course = require("../controller/courseController.js");
const Teacher = require("../controller/teachersController.js");
const Monitorings = require("../controller/monitoringsController.js");

// Courses
router.get("/courses", Course.getAllCourses.bind(Course));
router.get("/courses/:id", Course.getCourseById.bind(Course));
router.post("/courses", Course.createCourse.bind(Course));
router.put("/courses/:id", Course.updateCourse.bind(Course));
router.delete("/courses/:id", Course.deleteCourse.bind(Course));

// Teachers
router.get("/teachers", Teacher.getAllTeachers.bind(Teacher));
router.get("/teachers/:id", Teacher.getTeacherById.bind(Teacher));
router.post("/teachers", Teacher.createTeacher.bind(Teacher));
router.put("/teachers/:id", Teacher.updateTeacher.bind(Teacher));
router.delete("/teachers/:id", Teacher.deleteTeacher.bind(Teacher));

// Monitorings
router.get("/monitorings", Monitorings.getAllMonitorings.bind(Monitorings));
router.get("/monitorings/:id", Monitorings.getMonitoringById.bind(Monitorings));
router.post("/monitorings", Monitorings.createMonitoring.bind(Monitorings));
router.put("/monitorings/addStudent/:id", Monitorings.addStudentToMonitoring.bind(Monitorings));
router.put("/monitorings/removeStudent/:id", Monitorings.removeStudentFromMonitoring.bind(Monitorings));
router.delete("/monitorings/:id", Monitorings.deleteMonitoring.bind(Monitorings));

module.exports = router;
