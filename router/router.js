const express = require("express");
const courses = require("./../data/courses.js");

const router = express.Router();

const Course = require("../controller/courseController.js");
const Monitorings = require("../controller/monitoringsController.js");

// Courses
router.get("/courses", Course.getAllCourses.bind(Course));
router.get("/courses/:id", Course.getCourseById.bind(Course));
router.post("/courses", Course.createCourse.bind(Course));
router.put("/courses/:id", Course.updateCourse.bind(Course));
router.delete("/courses/:id", Course.deleteCourse.bind(Course));

// Monitorings
router.get("/monitorings", Monitorings.getAllMonitorings.bind(Monitorings));
router.get("/monitorings/:courseName", Monitorings.getMonitoringByName.bind(Monitorings));
router.post("/monitorings", Monitorings.createMonitoring.bind(Monitorings));
router.put("/monitorings/addStudent/:courseName", Monitorings.addStudentToMonitoring.bind(Monitorings));
router.put("/monitorings/removeStudent/:courseName", Monitorings.removeStudentFromMonitoring.bind(Monitorings));
router.delete("/monitorings/:courseName", Monitorings.deleteMonitoring.bind(Monitorings));

module.exports = router;
