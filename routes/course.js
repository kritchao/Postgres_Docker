const courseController = require('../controller/course');
const express = require('express');
const router = express.Router();

router.get('/', courseController.getCourse);
router.post('/', courseController.addCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router