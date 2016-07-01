# Boggle Game [![Build Status](https://travis-ci.org/lquixada/boggle.svg?branch=master)](https://travis-ci.org/lquixada/boggle)

A web-based implementation of the Boggle game for study purposes. More info on https://en.wikipedia.org/wiki/Boggle.


## Installation

```
$ git clone https://github.com/lquixada/boggle.git
$ cd boggle
$ npm install
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
$ nvm install
$ nvm use
```


## Getting Started

To run the app in development mode, run:

```
$ npm run start:dev
```

And go to http://localhost:8080/.

In order to run the isomorphic app in production:

```
$ npm run start:prod
```

(or just `npm start`) and go to http://localhost:9000/.

> Note that npm run start:dev will serve bundle.js from memory whereas
> npm run start:prod will serve it from filesystem.

To run all tests and lints, run:

```
$ npm test
```

## Tasks

* *npm test*: runs all the tests
* *npm run test:mocha*: tests files
* *npm run test:lint*: lints files
* *npm run test:watch*: runs all the tests everytime some file changes

* *npm start*: starts application in production mode
* *npm run start:dev*: starts application in development mode
* *npm run start:prod*: starts application in production mode

* *npm run build*: builds all the assets
* *npm run build:less*: convert less files into css
* *npm run build:webpack*: builds development bundle.js

* *npm run deploy*: deploys master branch to gh-pages branch


## Stack

* App: react, redux, underscore
* Style: less
* Tests: mocha, chai, enzyme, sinon
* Lint: eslint
* Utils: npm, webpack, babel
* CI: [TravisCI](https://travis-ci.org/lquixada/boggle)
* Hosting: [Heroku](https://bogglejs.herokuapp.com/)


## TODO

* Do more studies on code splitting
* Try webpack 2
* Reactify github ribbon
* Fix mobile version
* Retest on every browser (including IE10+)
* Optimize word checking
* Put /shared on NODE_PATH?

## Pending Improvements

* *PatternLock*: find word using the mouse in a visually compelling way.
* *Local Dictionary*: quicker feedback in a time-pressured game.
* *IntroJS*: a nice tour for beginners on Boggle rules.
