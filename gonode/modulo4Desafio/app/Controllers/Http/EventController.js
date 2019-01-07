'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request }) {
    const { order } = await request.get()

    const event = await Event.query().orderBy('date', order).with('user').fetch()

    return event
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'date', 'place'])

    const event = Event.create({ ...data, user_id: auth.user.id })

    return event
  }

  show ({ params, request, response, view }) {
    const event = Event.findOrFail(params.id)

    return event
  }

  async update ({ params, request, response }) {
    const event = await Event.findOrFail(params.id)
    const data = await request.only(['title', 'date', 'place'])

    event.merge(data)
    await event.save()

    return event
  }

  async destroy ({ params, request, response }) {
    const event = await Event.findOrFail(params.id)

    event.delete()
  }
}

module.exports = EventController
