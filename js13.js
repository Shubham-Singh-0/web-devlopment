// console.log("hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', '.html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>forms</title>
  </head>
  
  <body>
      <h2>This is forms</h2> 
      <form action="shubham.html">
          <div>
              Name:<input type="text"><br>
          </div><br>
          Roll no: <input type="text">
          <div><br>
              email: <input type="text"><br>
          </div><br>
          <div>
              date: <input type="date"><br>
          </div><br>
          <div>
              Gender male <input type="radio" name="my gender"> Female <input type="radio" name="my gender"> other <input
                  type="radio" name="my gender"><br>
          </div>
          <div><br>
              you re aligible <input type="checkbox"><br>
          </div>
          <div>
              <label for="car">car</label>
              <select name="my car" id="car">
                  <option value="tata">tata</option>
                  <option value="bmw">bmw</option>
              </select>
          </div>
          <div>
              Writ about yourself <br> <textarea name="my text" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
              <input type="submit" value="submit now">
              <input type="reset" value="reset now"><br>
  
          </div><br>
  
      </form>
  </body>
  
  </html>`);
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})