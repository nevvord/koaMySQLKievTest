/*
*   To start: npm run dev
*/

// ===== Imports =====
const Koa = require('koa')
const koaBody = require('koa-body')
const koaRouter = require('./router/index')
const mySQL = require('mysql')


// ===== Config =====
const Config = require('config')
const servConfig = Config.get('Server') //Config data for server. Serch in (./config/default.json)
const dbConfig = Config.get('db')

// ===== DB Conection =====
const db = mySQL.createConnection(dbConfig)
db.connect()

// ===== Globav value =====
global.db = db

// ===== Create =====
const app = new Koa()

// ===== Use =====
app.use(koaBody())
app.use(koaRouter.routes())
app.use(koaRouter.allowedMethods())


// ===== Listen =====
app.listen(servConfig.host, () => {
    console.log(`Server hosted in port : "${servConfig.host}"`)
})