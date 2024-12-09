import express from "express";
import { createMorganMiddleware, logMessages } from "./middleware/morgan.js";

const app = express();
const port = 3000;

// Use JSON parser
app.use(express.json());

app.use(createMorganMiddleware());

app.get("/", (req, res) => {
  res.status(200).send("GET request to the homepage");
});

app.post("/add", (req, res) => {
  res.status(201).send({ message: "Data added successfully" });
});

app.put("/update/:id", (req, res) => {
  res.status(200).send({ message: `Data updated for ID: ${req.params.id}` });
});

app.delete("/delete/:id", (req, res) => {
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
