const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const routes = require("./routes/TaskRoute");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDB está conectado..."))
  .catch((error) => console.log(error));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("PruebaN");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
