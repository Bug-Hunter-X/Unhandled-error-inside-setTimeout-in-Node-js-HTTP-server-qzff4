const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    if (req.url === '/error') {
      throw new Error('Something went wrong!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 1000);
});

server.on('error', (err) => {
  console.error('Server Error:', err);
  // Optionally handle the error more gracefully, such as logging it and restarting the server.
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});