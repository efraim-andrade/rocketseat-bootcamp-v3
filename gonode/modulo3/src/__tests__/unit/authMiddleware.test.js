const chai = require('chai')
const factory = require('../factory')
const mongoose = require('mongoose')
const sinon = require('sinon')

const httpMock = require('node-mocks-http')
const authMiddleware = require('../../app/middlewares/auth')

const { expect } = chai
const User = mongoose.model('User')

describe('Auth middleware', () => {
  it('it should validate the presence of JWT token', async () => {
    const request = httpMock.createRequest()
    const response = httpMock.createResponse()

    await authMiddleware(request, response)

    expect(response.statusCode).to.be.eq(401)
  })

  it('it should validate if token is valid', async () => {
    const request = httpMock.createRequest({
      headers: {
        authorization: 'Bearer 123456'
      }
    })

    const response = httpMock.createResponse()

    await authMiddleware(request, response)

    expect(response.statusCode).to.be.eq(401)
  })

  it('it should pass if token is valid', async () => {
    const user = await factory.create('User')

    const request = httpMock.createRequest({
      headers: {
        authorization: `Bearer ${User.generateToken(user)}`
      }
    })

    const nextSpy = sinon.spy()

    const response = httpMock.createResponse()

    await authMiddleware(request, response, nextSpy)

    expect(request).to.include({ userId: user.id })
    expect(nextSpy.calledOnce).to.be.true
  })
})
