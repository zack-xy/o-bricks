const users = require('./users')
const dept = require('./dept')
const menu = require('./menu')
const roles = require('./roles')
const approve = require('./approve')
const leave = require('./leave')
const vue3BmsRoutes = [...users, ...dept, ...menu, ...roles, ...approve, ...leave]
module.exports = [...vue3BmsRoutes]