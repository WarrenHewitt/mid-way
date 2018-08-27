'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')

class HomeController extends Controller {
  async insert() {
    fs.readFile('./app/public/data.js', 'utf8', (err, data) => {
      if (err) throw err
      this.ctx.model.Cook.insertMany(JSON.parse(data))
    })

    this.ctx.response.body = {
      result: 'ok'
    };
  }

  async list() {
    this.ctx.response.body = {
      result: await this.ctx.model.Cook.find({}, {'_id': 0})
    };
  }

  async listOne() {
    const { id } = this.ctx.params
    this.ctx.body = {
      result: await this.ctx.model.Cook.find({ '_id': id }, {'_id': 0})
    };
  }
}

module.exports = HomeController;
