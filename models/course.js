module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
        course_name:{
            type: DataTypes.STRING
        },
        course_description: {
            type: DataTypes.STRING
        },
        course_length: {
            type: DataTypes.INTEGER
        },
        language: {
            type: DataTypes.STRING
        }
    })

    Course.associate = models => {
        Course.belongsTo(models.teacher, { foreignKey: 'teacher_id'})
    }

    return Course
}