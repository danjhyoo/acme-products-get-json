const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
// console.log(path.join(__dirname, "./index.html"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

// app.get("/api/products", (req, res, next) => {
//   db.readJSON("./products.json")
//     .then(products => res.send(products))
//     .catch(ex => next(ex));
// });

app.get("/api/products", async (req, res, next) => {
  try {
    const products = await db.readJSON("./products.json");
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/companies", (req, res, next) => {
  db.readJSON("./companies.json")
    .then(companies => res.send(companies))
    .catch(ex => next(ex));
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`));
