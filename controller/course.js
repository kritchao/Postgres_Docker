const db = require('../models/index')

const getCourse = async (req, res) => {
    const Courses = await db.course.findAll({include: [db.teacher]});
    res.status(200).send(Courses);
};

const addCourse = async (req, res) => {
    const { course_name, course_description, course_length, language, teacher_id } = req.body
    const teacher = await db.teacher.findOne({ where: { id: teacher_id } })
    if (teacher) {
        const newCourse = await db.course.create({
            course_name: course_name,
            course_description: course_description,
            course_length: course_length,
            language: language,
            teacher_id: teacher_id
        })
        res.status(201).send(newCourse)
    }else {
        res.status(404).send({message: "need teacher id"})
    }

    
};

const deleteCourse = async (req, res) => {
    const targetId = Number(req.params.id)
    const targetCourse = await db.course.findOne({ where: { id: targetId } })
    if (targetCourse) {
        await targetCourse.destroy();
        res.status(204).send();
    } else {
        res.status(404).send({ message: "Course not found" })
    }

};

const updateCourse = async (req, res) => {
    const targetId = Number(req.params.id)
    const { course_name, course_description, course_length, language } = req.body
    const targetCourse = await db.course.findOne({ where: { id: targetId } })
    if (targetCourse) {
        await targetCourse.update({
            course_name: course_name,
            course_description: course_description,
            course_length: course_length,
            language: language
        });
        res.status(200).send(targetCourse)
    } else {
        res.status(404).send({ message: "Course not found" })
    }
};

module.exports = {
    getCourse,
    addCourse,
    deleteCourse,
    updateCourse
}