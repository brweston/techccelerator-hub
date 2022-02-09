const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db', 'user', 'pass', {
    dialect: 'sqlite',
    host: ":memory:"
})

//need to use host: "dev.sqlite" file for file-based db storage and to use sqlite extension
//tutorial: https://www.youtube.com/watch?v=bWFuEVmRgdk

module.exports = sequelize;