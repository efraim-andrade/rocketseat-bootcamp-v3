const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai

chai.use(chaiHttp)

const server = require('../../index')
const factory = require('../factory')

const User = mongoose.model('User')

describe('Authentication', () => {
  beforeEach(async () => {
    await User.deleteMany()
  })

  describe('SignUp', () => {
    it('it should able to sign up', async () => {
      const user = await factory.attrs('User')

      const response = await chai.request(server)
        .post('/users')
        .send(user)

      expect(response.body).to.have.property('name')
      expect(response.body).to.have.property('email')
      expect(response.body).to.have.property('password')
      expect(response).to.have.status(200)
    })

    it('it should not able to sign up with duplicates', async () => {
      const user = await factory.create('User')
      const user2 = await factory.attrs('User', {
        email: user.email
      })

      const response = await chai.request(server)
        .post('/users')
        .send(user2)

      expect(response).to.have.status(400)
      expect(response.body).to.have.property('error')
    })
  })

  describe('SignIn', () => {
    it('it should be able to authenticate with valid credentials', async () => {
      const user = await factory.create('User', {
        password: '123456'
      })

      const response = await chai.request(server)
        .post('/sessions')
        .send({ email: user.email, password: '123456' })

      expect(response.body).to.have.property('user')
      expect(response.body).to.have.property('token')
    })

    it('it should not be able to signin with nonexistent user', async () => {
      const response = await chai.request(server)
        .post('/sessions')
        .send({ email: 'a@b.com', password: '145258000' })

      expect(response).to.have.status(400)
      expect(response.body).to.have.property('error')
    })

    it('it should not be able to signin with a wrong password', async () => {
      const user = await factory.create('User', {
        password: '123456'
      })

      const response = await chai.request(server)
        .post('/sessions')
        .send({ email: user.email, password: '1234567' })

      expect(response).to.have.status(400)
      expect(response.body).to.have.property('error')
    })
  })
})
