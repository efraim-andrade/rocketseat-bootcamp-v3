'use strict'

const Route = use('Route')

Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    [
      ['users.store'], ['User']
    ], [
      ['users.update'], ['UserUpdate']
    ]
  ]))

Route.post('sessions', 'SessionController.store')

Route.group(() => {

}).middleware(['auth'])
