'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534492389149_4659';

  // add your config here
  config.middleware = [];

  config.mongoose = {
      client: {
        url: 'mongodb://127.0.0.1:27017/nodeBase',
        options: {
        
        },
      },
  }

  config.cors = {
    origin: '*'
  }

  return config;
};
