const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  try {
    const server = Hapi.server({
      port: 9000,
      host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};

init();
