//import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export const resHandler = (req, res, next) => {
  // fs.readFile('my-page.html', 'utf8', (err, data) => {
  //   res.send(data);
  // });
  res.sendFile(join(dirname(__filename), 'my-page.html'));
}

export default resHandler;