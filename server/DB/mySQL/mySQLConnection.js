const mysql = require('mysql')

module.exports= mySQLConnection =()=>{
    return mysql.createConnection({
        host:"172.16.44.70",
        user:"root",
        password:"swift",
        port:"3306",
        database:"csin"
    })
}
