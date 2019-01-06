'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async store ({ request, response }) {
    const data = await request.only(['email', 'password', 'username'])

    const user = await User.create(data)

    return user
  }

  async update ({ params, request, response }) {
    const user = await User.findOrFail(params.id)

    const password = await request.only(['old_password', 'password'])

    console.log(JSON.stringify(password) === '{}' ? 'true' : 'false')
    console.log(password)

    if (!(JSON.stringify(password) === '{}')) {
      const isSame = await Hash.verify(password.old_password, user.password)

      if (!isSame) {
        return response.status(401).send({ error: { message: 'senha atual errada' } })
      }
    }

    const data = await request.only(['email', 'password', 'username'])

    user.merge(data)
    await user.save()

    return user
  }
}

module.exports = UserController
