const db = require('../models/index')

const findCourseByName = async (req, res) => {
    const targetCourse = await db.course.findOne({
        where: {
            course_name: req.body.name,
        },
        include: [db.teacher]
    })
    if (targetCourse) {
        res.status(200).send(targetCourse)
    } else {
        res.status(404).send({ message: "Course not found" })
    }
}
const findCourseByDescription = async (req, res) => {
    const targetCourse = await db.course.findOne({
        where: {
            course_description: req.body.description,
        },
        include: [db.teacher]
    })
    if (targetCourse) {
        res.status(200).send(targetCourse)
    } else {
        res.status(404).send({ message: "Course not found" })
    }
}

const findCourseByTeacherName = async (req, res) => {
    const teacher_name = req.body.teacher_name
    const teacher = await db.teacher.findOne({ where: { first_name: teacher_name } })
    const targetCourse = await db.course.findOne({
        where: {
            teacher_id: teacher.id
        },
        include: [db.teacher]
    })
    if (targetCourse) {
        res.status(200).send(targetCourse)
    } else {
        res.status(404).send({ message: "Course not found" })
    }

}

const findCourse = async (req, res) => {
    const { name, description, teacher_name } = req.body;
    const teacher = await db.teacher.findOne({ where: { first_name: teacher_name } })
    const targetCourse = await db.course.findOne({
        where: {
            corse_name: name,
            course_description: description,
            teacher_id: teacher.id
        },
        include: [db.teacher]
    })
    if (targetCourse) {
        res.status(200).send(targetCourse)
    } else {
        res.status(404).send({ message: "Course not found" })
    }

}

module.exports = {
    findCourseByName,
    findCourseByDescription,
    findCourseByTeacherName,
    findCourse
}