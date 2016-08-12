require.extensions['.scss'] = function () {};

import logger from '../logger';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);

global.expect = expect;

/* Disable logging */
console.info = () => { /* SILENCE! I'LL KILL YA 💀 */ };
logger.info = () => { /* SILENCE! I'LL KILL YA 💀 */ };
