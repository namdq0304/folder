import mysql from "mysql";
const testMysql = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "00001111",
    database: "nodetest",
  });
  connection.connect();

  connection.query("SELECT * from  test", (err, rows, fields) => {
    if (err) throw err;

    console.log("The solution is: ", rows);
  });

  connection.end();
};
export default testMysql;
