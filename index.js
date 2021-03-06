const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/index');
const teacherRoute = require('./routes/teacher');
const courseRoute = require('./routes/course');
const searchRoute = require('./routes/handleSearch')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/teacher', teacherRoute)
app.use('/course', courseRoute)
app.use('/search', searchRoute)

db.sequelize.sync({force:true}).then(()=>{
    app.listen(8080, ()=>{
        console.log("App is running on port 8080")
    })
})
