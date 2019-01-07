'use strict'

const Antl = use('Antl')

class EventUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      date: 'date|unique:events'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = EventUpdate
