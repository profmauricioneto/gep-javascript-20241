const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let urlencondedParser = bodyParser.urlencoded({ extended: true });

// route of the page that will receive the form
app.post("/form", urlencondedParser, function (req, res) {
  fs.readFile("form.html", function (err, data) {
    var today = new Date();
    var values = {
      name: req.body.name,
      year: req.body.birthYear,
      age: today.getFullYear() - parseInt(req.body.birthYear),
    };
    for (var key in values) {
      data = data.toString().replace("{{" + key + "}}", values[key]);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/", (req, res) => {
  fs.readFile("index2.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end("Error: File not found");
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data, "utf-8");
      res.end();
    }
  });
});

app.listen(port, () => {
  console.log("Starting server");
  console.log(`Server is running on port localhost:${port}`);
});
