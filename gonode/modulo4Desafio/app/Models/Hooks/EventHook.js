'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewEventMail')
const EventHook = exports = module.exports = {}

EventHook.sendNewMail = async (eventInstance) => {
  if (!eventInstance.user_id && !eventInstance.dirty.user_id) return

  const { email, username } = await eventInstance.user().fetch()
  const { title, place, date } = await eventInstance

  Kue.dispatch(
    Job.key,
    {
      email,
      username,
      title,
      place,
      date
    }
  )
}
