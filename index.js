'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const formatData = require('./lib/format-data')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const {pathname} = await parse(request.url, true)
  const data = (await get('https://bfk-varselbrev.firebaseio.com/minelev.json', {json: true})).body
  const results = formatData(data)

  if (pathname === '/raw') {
    send(response, 200, data)
  } else if (pathname === '/json') {
    send(response, 200, results)
  } else if (pathname === '/html') {
    send(response, 200, renderPage(results))
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
