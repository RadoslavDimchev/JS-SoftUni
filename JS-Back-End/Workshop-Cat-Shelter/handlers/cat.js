const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('qs');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');
const globalPath = __dirname.toString().replace('handlers', '');


module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/cats/add-cat' && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

    const index = fs.createReadStream(filePath);

    index.on('data', (data) => {
      let catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
      let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);

      res.write(modifiedData);
    });

    index.on('end', () => {
      res.end();
    });

    index.on('error', (err) => {
      console.log(err);
    });
  } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

    const index = fs.createReadStream(filePath);

    index.on('data', (data) => {
      res.write(data);
    });

    index.on('end', () => {
      res.end();
    });

    index.on('error', (err) => {
      console.log(err);
    });
  } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
    let formData = '';

    req.on('data', (data) => {
      formData += data;
    });

    req.on('end', () => {
      let body = qs.parse(formData);

      fs.readFile('./data/breeds.json', (err, data) => {
        if (err) {
          throw err;
        }

        let breeds = JSON.parse(data);
        breeds.push(body.breed);
        let json = JSON.stringify(breeds);

        fs.writeFile('./data/breeds.json', json, 'utf-8', () => console.log('success'));
      });

      res.writeHead(301, { Location: '/' });
      res.end();
    });

  } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        throw err;
      }

      let oldPath = files.upload.filepath;
      let newPath = path.normalize(path.join(globalPath, '/content/images/' + files.upload.originalFilename));

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log(`Image uploaded to ${newPath}`);
      });

      fs.readFile('./data/cats.json', (err, data) => {
        if (err) {
          throw err;
        }
        console.log(fields);
        const allCats = JSON.parse(data);
        allCats.push({ id: (cats.length + 1).toString(), ...fields, image: files.upload.originalFilename });
        const json = JSON.stringify(allCats);

        fs.writeFile('./data/cats.json', json, (err) => {
          if (err) {
            throw err;
          }
          console.log('Cat successfully added!');
        });
      });
      res.writeHead(301, { 'location': '/' });
      res.end();
    });
  } else if (pathname.includes('/cats-edit') && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));

    const index = fs.createReadStream(filePath);

    index.on('data', (data) => {
      let catId = pathname.slice(pathname.lastIndexOf('/') + 1);
      let modifiedData = data.toString().replace('{{id}}', catId);
      let currentCat = cats.find(c => c.id === catId);

      modifiedData = modifiedData.replace('{{name}}', currentCat.name);
      modifiedData = modifiedData.replace('{{description}}', currentCat.description);

      const breedsAsOptions = breeds.map(b => `<option value="${b}">${b}</option>`);
      modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));

      modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);
      res.write(modifiedData);
    });

    index.on('end', () => {
      res.end();
    });

    index.on('error', (err) => {
      console.log(err);
    });
  } else if (pathname.includes('/cats-find-new-home') && req.method === 'GET') {
    const filePath = path.normalize(path.join(__dirname, '../views/catShelter.html'));

    const index = fs.createReadStream(filePath);

    index.on('data', (data) => {
      let catId = pathname.slice(pathname.lastIndexOf('/') + 1);
      let modifiedData = data.toString().replace('{{id}}', catId);
      let currentCat = cats.find(c => c.id === catId);

      modifiedData = modifiedData.replace('{{name}}', currentCat.name);
      modifiedData = modifiedData.replace('{{description}}', currentCat.description);

      const breedsAsOptions = breeds.map(b => `<option value="${b}">${b}</option>`);
      modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));

      modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);
      res.write(modifiedData);
    });

    index.on('end', () => {
      res.end();
    });

    index.on('error', (err) => {
      console.log(err);
    });
  } else if (pathname.includes('/cats-edit') && req.method === 'POST') {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        throw err;
      }

      let catId = req.url.split('/')[2];

      let oldPath = files.upload.filepath;
      let newPath = path.normalize(path.join(globalPath, '/content/images/' + files.upload.originalFilename));

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log(`Image uploaded to ${newPath}`);
      });

      fs.readFile('./data/cats.json', (err, data) => {
        if (err) {
          throw err;
        }

        const allCats = JSON.parse(data);
        allCats.splice(catId - 1, 1, { id: catId, ...fields, image: files.upload.originalFilename });
        const json = JSON.stringify(allCats);

        fs.writeFile('./data/cats.json', json, (err) => {
          if (err) {
            throw err;
          }
          console.log('Cat successfully edited!');
        });
      });

      res.writeHead(301, { 'location': '/' });
      res.end();
    });
  } else if (pathname.includes('/cats-find-new-home') && req.method === 'POST') {
    fs.readFile('./data/cats.json', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let currentCats = JSON.parse(data);
        let catId = req.url.split('/')[2];

        currentCats = currentCats.filter(c => c.id !== catId);
        let json = JSON.stringify(currentCats);
        fs.writeFile('./data/cats.json', json, 'utf8', () => {
          res.writeHead(302, { 'location': '/' });
          res.end();
        });
      }
    });
  } else {
    return true;
  }
};