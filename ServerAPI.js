const express = require("express") //подключение express
const fs = require('fs')
const path = require("path/posix")
const cors = require('cors');
const petsRouter = require("./routes/pets.routes.js")
const PORT = 8081 //назначение переменной порта.
//можно вместо этого взять переменную по умолчанию - express.env.PORT || 8080

const app = express() //создание самого сервера

app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use('/api', petsRouter)

app.listen(PORT, () => console.log(`Сервер был запущен на http://localhost:${PORT}/api/pets`));