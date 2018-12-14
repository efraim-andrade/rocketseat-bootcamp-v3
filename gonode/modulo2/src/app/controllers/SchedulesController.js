const { User, Appointment } = require('../models')
const moment = require('moment')

moment.locale('pt-br')

class SchedulesController {
  async index (req, res) {
    const provider = await User.findByPk(req.params.provider)
    var unformatedSchedules = await Appointment.findAll({
      where: {
        provider_id: provider.id
      }
    })

    const schedules = unformatedSchedules.map(schedule => {
      return moment(schedule.date).format('lll')
    })

    return res.render('schedules/index', { provider, schedules })
  }
}

module.exports = new SchedulesController()
