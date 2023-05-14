import express from 'express'
import connection from './Connection/db.js';
import router from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;

connection();


app.use(cors())
app.use("/",router)

if(process.env.TEST_URL == "dev"){
    app.use(express.static(path.join(__dirname, "./client/build")));
    app.get("*", function (_, res) {
      res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
          res.status(500).send(err);
        }
      );
    });
    }

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})