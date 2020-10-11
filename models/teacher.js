module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('teacher', {
        first_name:{
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        date_of_birth: {
            type: DataTypes.DATEONLY
        },
        age: {
            type: DataTypes.INTEGER
        },
        country: {
            type: DataTypes.STRING
        }
    })
    Teacher.associate = models => {
        Teacher.hasMany(models.course, {foreignKey: 'teacher_id'})
    }

    return Teacher
}