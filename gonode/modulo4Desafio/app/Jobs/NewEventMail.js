'use strict'

const Mail = use('Mail')
const moment = require('moment')

class NewEventMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewEventMail-job'
  }

  async handle ({ email, username, title, place, date }) {
    console.log(`job: ${NewEventMail.key}`)

    moment.locale('pt-BR')

    await Mail.send(
      'emails.event_mail',
      { username, title, place, date: moment(date).format('dddd, hA') },
      message => {
        message
          .to(email)
          .from('efraim.morais@fatecitapetininga.edu.br', 'Efraim Andrade')
          .subject('Novo evento')
      }
    )
  }
}

module.exports = NewEventMail
