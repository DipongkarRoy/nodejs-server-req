const http = require('node:http');
// Import the URL module
;

const users = [
  {
    "name": "Alice",
    "class": "10th",
    "union": true,
    "result": "Pass"
  },
  {
    "name": "Bob",
    "class": "12th",
    "union": false,
    "result": "Pass"
  },
  {
    "name": "Charlie",
    "class": "11th",
    "union": true,
    "result": "Fail"
  },
  {
    "name": "David",
    "class": "9th",
    "union": false,
    "result": "Pass"
  },
  {
    "name": "Emily",
    "class": "10th",
    "union": true,
    "result": "Pass"
  }
]


const server = http.createServer((req, res) => {


  if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, {
       'Content-Type': 'text/html' 
      });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Flag of India</title>
    </head>
    <body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0;">
      <div class="indian-flag" style="width: 300px; height: 200px; position: relative;">
        <div class="saffron" style="background-color: #FF9933; width: 100%; height: 33.33%;"></div>
        <div class="white" style="background-color: #FFFFFF; width: 100%; height: 33.34%;"></div>
        <div class="green" style="background-color: #138808; width: 100%; height: 33.33%;"></div>
        <div class="wheel" style="position: absolute; top: calc(50% - 15px); left: calc(50% - 15px); width: 30px; height: 30px; border: 2px solid #000; border-radius: 50%; box-sizing: border-box;">
          <div class="spoke" style="position: absolute; width: 2px; height: 15px; background: #000; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(45deg);"></div>
          <div class="spoke" style="position: absolute; width: 2px; height: 15px; background: #000; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-45deg);"></div>
        </div>
      </div>
    </body>
    </html>
    
    `)
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(users))
  }
  else if (req.url === '/post' && req.method === 'GET') {
    res.end('vai tui valo kaj korcis ,data post kore felo')
  }
  else {
    res.end('not found data 404')
  }
  //res.end('hellow from server world')
  //console.log(req.url);
});

server.listen(5000, '127.0.0.1', () => {
  console.log('server is running project');
})