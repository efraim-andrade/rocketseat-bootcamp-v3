const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai

chai.use(chaiHttp)

const server = require('../../index')
const factory = require('../factory')

const User = mongoose.model('User')
const Ad = mongoose.model('Ad')

describe('Ad', () => {
  beforeEach(async () => {
    await User.deleteMany()
    await Ad.deleteMany()
  })

  // describe('Create Ad', () => {
  //   it('it should able to create a ad', async () => {
  //     const ad = await factory.create('Ad')

  //     const user = await factory.create('User')
  //     const token = await User.generateToken(user)

  //     const response = await chai.request(server)
  //       .post('/ads')
  //       .set('Authorization', `Bearer ${token}`)
  //       .send(ad)

  //     expect(response).to.have.status(200)
  //     expect(response.body).to.include('purchased_by')
  //   })
  // })
})
