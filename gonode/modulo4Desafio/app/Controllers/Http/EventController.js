'use strict'

const Event = use('App/Models/Event')
const moment = require('moment')

class EventController {
  async index ({ request, auth }) {
    const { order } = await request.get()

    const event = await Event.query()
      .where('user_id', auth.user.id)
      .orderBy('date', order)
      .with('user')
      .fetch()

    return event
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'date', 'place'])

    const event = Event.create({ ...data, user_id: auth.user.id })

    return event
  }

  async show ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (auth.user.id !== event.user_id) {
      return response.status(400).send({ error: { message: 'Esse evento pertence a outro usuário' } })
    }

    return event
  }

  async update ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)
    const data = await request.only(['title', 'date', 'place'])

    if (auth.user.id !== event.user_id) {
      return response.status(400).send({ error: { message: 'Esse evento pertence a outro usuário' } })
    }

    if (moment(event.date).isBefore(new Date())) {
      return response.status(400).send({ error: { message: 'Não é possível editar um evento que já passou' } })
    }

    event.merge(data)
    await event.save()

    return event
  }

  async destroy ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (auth.user.id !== event.user_id) {
      return response.status(400).send({ error: { message: 'Esse evento pertence a outro usuário' } })
    }

    if (moment(event.date).isBefore(new Date())) {
      return response.status(400).send({ error: { message: 'Não é possível editar um evento que já passou' } })
    }

    event.delete()
  }
}

module.exports = EventController
