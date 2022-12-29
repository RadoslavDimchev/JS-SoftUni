const url = require('url');
const fs = require('fs');
const path = require('path');

function getContentType(url) {
  if (url.endsWith('css')) {
    return 'text/css';
  } else if (url.endsWith('html')) {
    return 'text/html';
  } else if (url.endsWith('png')) {
    return 'image/png';
  } else if (url.endsWith('ico')) {
    return 'image/ico';
  } else if (url.endsWith('js')) {
    return 'text/js';
  } else if (url.endsWith('jpg')) {
    return 'image/jpg';
  } else if (url.endsWith('jpeg')) {
    return 'image/jpeg';
  }
}


module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname.startsWith('/content') && req.method === 'GET') {

    if (pathname.endsWith('png') || pathname.endsWith('jpg') || pathname.endsWith('jpeg') || pathname.endsWith('ico') && req.method === 'GET') {
      fs.readFile(`./${pathname}`, (err, data) => {
        if (err) {
          console.log(err);
  
          res.writeHead(404, {
            'Content-Type': 'text/plain'
          });
  
          res.write('Error was found found');
          res.end();
          return;
        }
  
        console.log(pathname);
        res.writeHead(200, {
          'Content-Type': getContentType(pathname)
        });
  
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile(`./${pathname}`, 'utf8', (err, data) => {
        if (err) {
          console.log(err);

          res.writeHead(404, {
            'Content-Type': 'text/plain'
          });

          res.write('Error was found found');
          res.end();
          return;
        }

        console.log(pathname);
        res.writeHead(200, {
          'Content-Type': getContentType(pathname)
        });

        res.write(data);
        res.end();
      });
    }
  } else {
    return true;
  }
};