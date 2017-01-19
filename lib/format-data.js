'use strict'

const schools = require('./schools.json')

module.exports = (data) => {
  const results = schools
    .map((school) => Object.assign(school, {antall: data[`antall${school.id}`] || 0}))
    .map((school) => Object.assign({name: school.name, antall: school.antall}))

  return results
}
