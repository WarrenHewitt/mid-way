'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      result: await this.ctx.model.Cook.find({})
    };
  }
}

module.exports = HomeController;
