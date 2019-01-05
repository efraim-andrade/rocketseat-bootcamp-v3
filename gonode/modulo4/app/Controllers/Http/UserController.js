'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password']) // apenas os listados
    const addresses = request.input('addresses') // Busca apenas o campo

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.addresses().createMany(addresses, trx) // cria os enderecos para o usuario

    await trx.commit()

    return user
  }
}

module.exports = UserController
