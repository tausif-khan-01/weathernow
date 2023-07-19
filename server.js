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

//* path of directories
const templatesPath = path.join(__dirname,"./templates")
const viewsPath = path.join(__dirname,"./templates/views")
const partialsPath = path.join(__dirname,"./templates/partials")



//* View engine setting
//set template/view engine
app.set("view engine", "hbs");
// changing folder name views to templates
app.set("views", viewsPath);
// Using partials
hbs.registerPartials(partialsPath);

// https://openweathermap.org/img/wn/${}@2x.png


app.use(express.urlencoded({ extended: true }));

//* Configure static file serving
app.use(express.static(path.join(__dirname, "/public")));

//* serving templates files
app.get("/", (req, res) => {
    res.status(200).render('index');
});

const hi = "Tausif"
app.get("/weather", (req, res) => {
  res.status(200).render('weather');
});





app.listen(port, hostname, () => {
  console.log(`server is online at http://${hostname}`);
});
