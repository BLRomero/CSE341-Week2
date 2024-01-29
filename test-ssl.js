const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/private-key.pem'),      // Replace with the path to your private key file
  cert: fs.readFileSync('path/to/certificate.pem')       // Replace with the path to your certificate file
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, secure world!');
});

const port = 443;  // HTTPS default port

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
