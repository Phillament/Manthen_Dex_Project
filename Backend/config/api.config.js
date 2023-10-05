const mysql2 = require("mysql");


const initialiseDatabase = ()=>{
    const db = mysql2.createConnection({
      port: "3306",
      user: "root",
      host: "localhost",
      password:  "",
      database:  "Crypto",
    });
  
    return db;
  };
  
  module.exports = {
    initialiseDatabase
  };
