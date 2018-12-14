const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    const providers = await User.findAll({ where: { provider: true } })

    return res.render('dashboard', { providers, user: req.session.user })
  }
}

module.exports = new DashboardController()
