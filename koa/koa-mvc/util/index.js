const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port:3306,
  database:'chat'
})

let query = (sql,val) => {
  return new Promise((resolve,reject) => {
    pool.getConnection((err,connect) => {
      if(err) return reject(err)
      connect.query(sql,val,(err,rows) => {
        if(err) reject(err)
        else resolve(rows)
        connect.release()
      })
    })
  })
}

module.exports = query