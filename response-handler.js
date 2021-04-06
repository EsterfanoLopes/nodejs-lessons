import fs from 'fs';

export const resHandler = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8', (err, data) => {
    res.send(data);
  });
}

export default resHandler;