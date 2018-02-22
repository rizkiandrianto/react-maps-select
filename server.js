// server.js
const next = require('next')
const routes = require('./app/routes')
const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: './app',
    useFileSystemPublicRoutes: false
})
const handler = routes.getRequestHandler(app)
 
// With express
// const express = require('express')
// app.prepare().then(() => {
//   express().use(handler).listen(3000)
// })
 
// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})