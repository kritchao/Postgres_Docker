## Postgres_Docker Assignment

- this project using docker-compose to create docker image
- using PostgresSQL as Database
- using Node.js (express) as Application
- using Sequelize as ORM framework
- running on port 3000

### Teachers CRUD:
- get '/teacher' get all teachers.
- put '/teacher' add new teacher with body values of first_name, last_name, date_of_birth (YYYY/MM/DD), country.
- delete '/teacher/:id' delete teacher with teacher's id parameter.
- update '/teacher/:id' update teacher with teacher's id parameter.

### Course CRUD: 

- get '/course' get all courses.
- put '/course' add new course with body values of course_name, course_description, course_length, language.
- delete '/course/:id' delete course with course's id parameter.
- update '/course/:id' update course with course's id parameter

### Search

- get '/search/name' to search course with body value of name (course_name).
- get '/seach/description' to search course with body value of description (course_description).
- get '/search/teacherName' to search course with body value of teacher_name
