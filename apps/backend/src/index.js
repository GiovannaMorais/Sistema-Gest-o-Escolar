import express from "express";
import route from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(route);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
