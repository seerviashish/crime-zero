const server = require('./server');
const {port} = require('./config');

server.listen(port, () => {
  console.info(`Server started on port ${port}`);
});

const src = server;

module.exports = src;
