'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/cook/insert/', controller.cook.insert);
  router.get('/cook/', controller.cook.list);
  router.get('/cook/:id', controller.cook.listOne);

  router.get('/novel/:id', controller.novel.index);

};
