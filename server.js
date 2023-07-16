import express from "express";
import path from "path";
import hbs from "hbs";
import fs from "fs"
import { fileURLToPath } from "url";



const app = express();


const port = 80;
const hostname = "127.0.0.1";

//* Get the current filename and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//* paths for diffrent foders
// const pathOf =

// Configure static file serving
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname ,'/public/html/index.html'));
});

app.get("/about",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname ,'/public/html/index.html'));
    
})
app.get("/main.css",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname ,'/public/css/output.css'));
    
})
app.get("/public",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname +'/public'));
    
})


app.listen(port, hostname, () => {
  console.log(`server is online at http://${hostname}`);
});
