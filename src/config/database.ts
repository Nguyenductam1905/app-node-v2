// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  password: 'Tam19052004@',
  user: 'root',
  database: 'nodejspro',
});

export default connection;