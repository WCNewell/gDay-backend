const express = require("express")
const morgan = require("morgan")
// const dbConnection = require("./connection.js")
const PORT = process.env.PORT || 3000;
const app = express()

app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"))

app.get('/', (request, response) => response.send('Wassup Earth'))

app.listen(PORT, () => console.log("Example app running"))
