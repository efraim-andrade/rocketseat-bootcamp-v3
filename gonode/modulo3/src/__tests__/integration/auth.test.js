const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai

chai.use(chaiHttp)

const server = require('../../index')
const User = mongoose.model('User')

it('it should be able to authenticate with valid credentials', async () => {
  await User
    .findOneAndDelete()
    .where('email', 'teste@gmail.edu.br')

  const user = await User.create({
    name: 'Teste Teste',
    username: 'Teste',
    email: 'teste@gmail.edu.br',
    password: '123456'
  })

  const response = await chai.request(server)
    .post('sessions')
    .send({ email: user.email, password: '123456' })

  expect(response.body).to.have.property('user')
  expect(response.body).to.have.property('token')
})
