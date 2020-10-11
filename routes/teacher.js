const teacherController = require('../controller/teacher');
const express = require('express');
const router = express.Router();

router.get('/', teacherController.getTeacher);
router.post('/', teacherController.addTeacher);
router.put('/:id', teacherController.updateTeacher);
router.delete('/:id', teacherController.deleteTeacher);

module.exports = router