import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo en express");
});

app.get("/android", (req, res) => {
  res.send("server android prueba");
});

const port = process.env.DB_PORT || 1000;

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
