import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export const resHandler = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8')
    .then((data) => {
      res.send(data);
    }).catch(err => {
      console.log(err);
    });
  // res.sendFile(join(dirname(__filename), 'my-page.html'));
}

export default resHandler;