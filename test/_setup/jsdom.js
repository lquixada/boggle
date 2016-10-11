import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = doc.defaultView;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
