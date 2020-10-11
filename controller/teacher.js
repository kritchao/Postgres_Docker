const db = require('../models/index')

const getTeacher = async (req, res) => {
    const teachers = await db.teacher.findAll();
    res.status(200).send(teachers);
};

const addTeacher = async (req, res) => {
    const { first_name, last_name, date_of_birth, country } = req.body
    const today = new Date()
    const bd = new Date(date_of_birth)
    const newTeacher = await db.teacher.create({
        first_name: first_name,
        last_name: last_name,
        date_of_birth: date_of_birth,
        age: today.getFullYear() - bd.getFullYear(),
        country: country
    });

    res.status(201).send(newTeacher);
};

const deleteTeacher = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetTeacher = await db.teacher.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetTeacher) {
        await targetTeacher.destroy();
        res.status(204).send();
    } else {
        res.status(404).send({ message: "Teacher not found" })
    }

};

const updateTeacher = async (req, res) => {
    const targetId = Number(req.params.id);
    const { first_name, last_name, date_of_birth, age, country } = req.body
    const targetTeacher = await db.teacher.findOne({ where: { id: targetId, user_id: req.user.id } });
    if (targetTeacher) {
        await targetTeacher.update({
            first_name: first_name,
            last_name: last_name,
            date_of_birth: date_of_birth,
            age: age,
            country: country
        });
        res.status(200).send(targetTeacher)
    } else {
        res.status(404).send({ message: "Teacher not found" })
    }
};

module.exports = {
    getTeacher,
    addTeacher,
    updateTeacher,
    deleteTeacher
}