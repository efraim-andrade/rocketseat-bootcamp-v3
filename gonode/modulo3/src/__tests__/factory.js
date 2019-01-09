const mongoose = require('mongoose')
const factoryGirl = require('factory-girl')
const faker = require('faker')

const { factory } = factoryGirl

factory.setAdapter(new factoryGirl.MongooseAdapter())

/**
 * User
 */

factory.define('User', mongoose.model('User'), {
  name: faker.name.findName(),
  username: factory.seq('User.username', n => `user_${n}`),
  email: factory.seq('User.email', n => `user_${n}@gmail.com`),
  password: faker.internet.password()
})

/**
 * Purchase
 */

factory.define('Ad', mongoose.model('Ad'), {
  title: faker.random.word(),
  description: faker.lorem.sentences(),
  price: faker.finance.amount()
})

module.exports = factory
