const Sequelize = require('sequelize')
const { sequelize } = require('../../db')

const Place = sequelize.define(`place`, {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Place
