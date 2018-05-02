const express = require("express")
const morgan = require("morgan")
const dbConnection = require("./connection.js")
const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"))

app.get('/', (request, response) => {
    dbConnection('student')
    .select('*')
    .then(students => response.status(200).json(students))
    .catch(error => response.status(500).json({ error: error.message, stack: error.status }))
})

app.get("/:id", (request, response) => {
  dbConnection("student")
    .select("*")
    .limit(1)
    .where({ id: request.params.id })
    .then(student => response.status(200).json(student))
    .catch(error => response.status(500).json({ error: error.message, stack: error.status })
    )
})





app.listen(PORT, () => console.log("Example app running")) //hello
