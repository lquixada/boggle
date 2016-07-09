import path from 'path';
import express from 'express';

export default express.static(path.join(__dirname, '..'));
