import path from 'path';
import express from 'express';

const dir = path.join(__dirname, '..', '..', '..', 'web', 'assets');

export default express.static(dir);
