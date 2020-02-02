// 获取基础配置
const configs = require('./config')

// 线程池
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.user,
    password: configs.mysql.pass,
    database: configs.mysql.db
  } 
})

module.exports = { mysql: knex }