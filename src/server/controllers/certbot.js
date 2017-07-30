import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const challenge = path.join(__dirname, 'challenge');

router.get('/*', (req, res) => {
  fs.readFile(challenge, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(`${data}`);
  });
});

router.post('/', (req, res) => {
  fs.writeFile(challenge, req.body.key, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(`Challenge set to: ${req.body.key}`);
  });
});

export default router;
