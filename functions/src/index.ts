import { Request, Response } from 'express'
const functions = require('firebase-functions')
const app = require('express')()
const { Nuxt } = require('nuxt')
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: { publicPath: '/' },
})
const handler = async (req: Request, res: Response) => {
  try {
    const { html } = await nuxt.renderRoute('/', { req })
    res.send(html)
  } catch (e) {
    res.send(e)
  }
}

app.use(handler)
exports.ssrapp = functions.https.onRequest(app) // リージョン変更NG (リライトできない)
