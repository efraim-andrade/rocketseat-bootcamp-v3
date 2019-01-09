const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')
const nodemailer = require('nodemailer')

const transport = {
  sendMail: sinon.spy()
}

sinon.stub(nodemailer, 'createTransport').returns(transport)

const { expect } = chai

chai.use(chaiHttp)

const server = require('../../index')
const factory = require('../factory')
