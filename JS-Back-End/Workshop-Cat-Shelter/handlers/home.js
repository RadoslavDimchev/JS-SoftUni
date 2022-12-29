const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');
const formidable = require('formidable');


module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/' && req.method === 'GET') {
    const filePath = path.normalize(
      path.join(__dirname, '../views/home/index.html')
    );

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);

        res.writeHead(404, {
          'Content-Type': 'text/plain'
        });

        res.write('404 Not found');
        res.end();
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      let modifiedCats = cats.map(cat => `
      <li>
        <img src="${path.join('./content/images/' + cat.image)}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
            <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
        </ul>
      </li>`);
      let modifiedData = data.toString().replace('{{cats}}', modifiedCats);

      res.write(modifiedData);
      res.end();
    });
  } else if (pathname.includes('/search') && req.method === 'POST') {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, field) => {
      if (err) {
        throw err;
      }

      fs.readFile('./data/cats.json', (err, data) => {
        if (err) {
          throw err;
        }

        const filePath = path.normalize(path.join(__dirname, '../views/home/index.html'));
        
        const search = field.name;
        const allCats = JSON.parse(data);
        const searchCats = allCats.filter(cat => cat.name.includes(search));

        fs.readFile(filePath, (err, data2) => {
          if (err) {
            console.log(err);

            res.writeHead(404, {
              'Content-Type': 'text/plain'
            });

            res.write('404 Not found');
            res.end();
            return;
          }

          res.writeHead(200, {
            'Content-Type': 'text/html'
          });

          let modifiedCats = searchCats.map(cat => `
            <li>
              <img src="${path.join('./content/images/' + cat.image)}" alt="${cat.name}">
              <h3>${cat.name}</h3>
              <p><span>Breed: </span>${cat.breed}</p>
              <p><span>Description: </span>${cat.description}</p>
              <ul class="buttons">
                  <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                  <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
              </ul>
            </li>`);
          let modifiedData = data2.toString().replace('{{cats}}', modifiedCats);

          res.write(modifiedData);
          res.end();
        });
      });
    });
  } else {
    return true;
  }
};