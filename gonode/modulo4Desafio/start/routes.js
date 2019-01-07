'use strict'

const Route = use('Route')

Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    [ ['users.store'], ['User'] ],
    [ ['users.update'], ['UserUpdate'] ]
  ]))

Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('events', 'EventController')
    .apiOnly()
    .validator(new Map([
      [ ['events.store'], ['EventStore'] ],
      [ ['events.update'], ['EventUpdate'] ]
    ]))

  Route.post('events/:id/share', 'ShareController.index')
}).middleware(['auth'])
