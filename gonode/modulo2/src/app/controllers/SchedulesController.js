const { User, Appointment } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

moment.locale('pt-br')

class SchedulesController {
  async index (req, res) {
    const provider = await User.findByPk(req.params.provider)

    const unformatedSchedules = await Appointment.findAll({
      where: {
        provider_id: provider.id,
        date: {
          [Op.between]: [
            moment().startOf('day').format(),
            moment().endOf('day').format()
          ]
        }
      }
    })

    const schedules = unformatedSchedules.map(schedule => {
      return moment(schedule.date).calendar()
    })

    return res.render('schedules/index', { provider, schedules })
  }
}

module.exports = new SchedulesController()
