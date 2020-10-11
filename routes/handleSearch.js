const searchController = require('../controller/search');
const express = require('express');
const router = express.Router();

router.get('/name', searchController.findCourseByName);
router.get('/description', searchController.findCourseByDescription);
router.get('/teacherName', searchController.findCourseByTeacherName);

module.exports = router