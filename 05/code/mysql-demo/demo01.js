import mysql from 'mysql'

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});

connection.connect();

connection.query('SELECT * from `user`', function (error, results, fields) {
  if (error) throw error
  console.log(results)
})

// connection.query('INSERT INTO user VALUES(NULL, "admin", "123456", NULL)', function (error, results, fields) {
//   if (error) throw error
//   console.log(results)
// })

connection.end();
