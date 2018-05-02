const express = require("express")
const morgan = require("morgan")
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")
const dbConnection = require("./connection.js")

require('dotenv').config()

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3000

// This creates an authenticated S3 instance
const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        accessKeyId: process.env.S3_ACCESS_KEY_ID
    }
})

const upload = multer({
    storage: multerS3({
        s3, bucket: process.env.S3_BUCKET_NAME,
        key: (request, file, next) => { 
            next(null, `files/${Date.now()}_${file.originalname}`);
        }
    })
})

router.post("/upload", upload.single("file"), (request, response) => {
    response.json({data: request.file.location});
})

module.exports = router;

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

app.listen(PORT, () => console.log("gDAY Back-end Running"))
