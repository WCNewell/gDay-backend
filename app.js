const express = require("express")
const morgan = require("morgan")
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")

const dbConnection = require("./connection.js")
const PORT = process.env.PORT || 3000
const app = express()
const router = express.Router()

// This creates an authenticated S3 instance
const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        secretAccessKey: process.env.80K33PNAgW4wwJTTJ8fYeNS0SwTE+rdLB2A3bm9a,
        accessKeyId: process.env.AKIAIGSNH5DMDYJLER2A
    }
})

const upload = multer({
    storage: multerS3({
        s3, bucket: process.env.gday-m8,
        key: (request, file, next) => { 
            next(null, `files/${Date.now()}_${file.originalname}`);
        }
    })
})

router.post("/upload", upload.single("file"), (request, response) => {
    response.json({data: request.file.location});
});

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





app.listen(PORT, () => console.log("Example app running")) //hello
