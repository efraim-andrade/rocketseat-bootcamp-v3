'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewEventMail')
const Event = use('App/Models/Event')
const User = use('App/Models/User')

class ShareController {
  async index ({ params }) {
    const event = await Event.findOrFail(params.id)
    const user = await User.findOrFail(event.user_id)

    Kue.dispatch(Job.key, {
      email: user.email,
      username: user.username,
      title: event.title,
      place: event.place,
      date: event.date
    }, { attempts: 3 })
  }
}

module.exports = ShareController
