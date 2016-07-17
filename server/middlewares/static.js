import path from 'path';
import express from 'express';

const dir = path.join(__dirname, '..', '..');

export default express.static(dir);
