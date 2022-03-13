import express from "express";
import testMysql from "./database/connect.js";
import mysql from "mysql";

const app = express();
const port = 5000;
// testMysql();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "00001111",
  database: "test",
});

connection.connect();

// connection.query("select * from test", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].id);
// });

connection.end();

app.get("/", (req, res) => {
  res.json({ title: "chào nam" });
});
app.listen(port, () => console.log("you are on :" + port));
