import path from 'path';
import express from 'express';

const dir = path.join(__dirname, '..', '..', '..', 'public');

export default express.static(dir);
