const functions = require('firebase-functions')
const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/'
  }
 })
function handler(req, res) {
  nuxt.renderRoute('/', { req }).then(result => {
    res.send(result.html)
  }).catch(e => {
    res.send(e)
  })
}

app.use(handler)
exports.ssrapp = functions.https.onRequest(app)