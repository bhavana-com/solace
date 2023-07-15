const http = require('http');
const url = require('url');
const qs = require('querystring');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // Serve login page
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <body>
          <h2>Login</h2>
          <form method="POST" action="/login">
            <div>
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required>
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Log in</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  }
  // Process login form submission
  else if (pathname === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      const { username, password } = formData;

      // Check if username and password are correct
      if (username === 'bhavana' && password === 'password') {
        console.log('Welcome!');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome!');
      } else {
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Invalid username or password');
      }
    });
  }
  // Handle invalid routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running http://localhost:3000/');
});