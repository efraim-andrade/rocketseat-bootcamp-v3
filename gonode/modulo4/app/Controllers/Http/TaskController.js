'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index ({ params, request, response, view }) {
    const tasks = await Task.query()
      .where('project_id', params.projects_id)
      .with('user') // vir com os dados do usuario do relacionamento
      .fetch()

    return tasks
  }

  async store ({ params, request }) {
    const data = await request.only([
      'user_id',
      'file_id',
      'title',
      'description',
      'due_date'
    ])

    const task = await Task.create({ ...data, project_id: params.projects_id })

    return task
  }

  async show ({ params }) {
    const task = await Task.findOrFail(params.id)

    return task
  }

  async update ({ params, request }) {
    const task = await Task.findOrFail(params.id)

    const data = await request.only([
      'user_id',
      'file_id',
      'title',
      'description',
      'due_date'
    ])

    task.merge(data)

    await task.save()

    return task
  }

  async destroy ({ params, request, response }) {
    const task = await Task.findOrFail(params.id)

    await task.delete()
  }
}

module.exports = TaskController
