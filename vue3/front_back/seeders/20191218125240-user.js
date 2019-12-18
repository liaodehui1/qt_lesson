'use strict';
const md5 = require('md5')
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('user', [
     {
       id: 1,
       username: 'wn',
       password: md5('123456'),
       disabled: false,
       mobile: '152756556350',
       email: '123456@qq.com',
       created_ip_at: '127.0.0.1',
       updated_ip_at: '127.0.0.1',
       created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
       updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
     },
     {
       id: 2,
       username: 'wnnn',
       password: md5('123456'),
       disabled: false,
       mobile: '152756553450',
       email: '1234567@qq.com',
       created_ip_at: '127.0.0.1',
       updated_ip_at: '127.0.0.1',
       created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
       updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
