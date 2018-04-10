import fs from 'fs';
import path from 'path';
import express from 'express';

const router = express.Router();
const challenge = path.join(__dirname, 'challenge');

router.get('/*', (req, res) => {
  fs.readFile(challenge, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(data);
  });
});

/**
 * Here's a potential security flaw. Since this is a project created
 * only for study purposes, we're ok to that.
 */
router.post('/', (req, res) => {
  const key = req.body.key.substr(0, 90);
  fs.writeFile(challenge, key, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(`Challenge set to: ${key}`);
  });
});

export default router;
