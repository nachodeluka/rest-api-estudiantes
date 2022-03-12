const express = require('express');

const app = express();

app.set('view engine','ejs'); 
app.engine('ejs', require('ejs').__express);

let estudiantes = [
    { id: 1, name: 'Juan Rodriguez', age: 14, state: 'Montevideo' },
    { id: 2, name: 'Pepe Fernandez', age: 15, state: 'Canelones' },
    { id: 3, name: 'Pedro Varela', age: 15, state: 'Artigas' },
    { id: 4, name: 'Juana Pereira', age: 17, state: 'Punta del Este' },
    { id: 5, name: 'Lucia Gonzalez', age: 14, state: 'Maldonado'}
]

let statusON = {
    code: 200,
    message: 'Application is online.'
}

app.listen(3000, () => {
    console.log("[Servidor Iniciado] Escuchando en puerto 3000");
    console.log(estudiantes)
});

app.get('/', function(req, res) {
    res.render('index.ejs')
});

app.get('/api/status', function (req, res) {
    res.json(statusON)
});

app.get('/api/estudiantes', function (req, res) {
    res.json(estudiantes);
});

app.get('/api/estudiantes/random', function (req, res) {
    const random = Math.floor(Math.random() * estudiantes.length)
    const randomEstudiante = estudiantes[random];
    res.json(randomEstudiante);
});

app.get('/api/estudiantes/:id', function (req, res) {
    const student = estudiantes[req.params.id-1]
    res.json(student)
});

// app.delete('/api/estudiantes/delete/:id', function (req, res) {
//     const deleteStudent = req.params.id;
//     res.send();
// });