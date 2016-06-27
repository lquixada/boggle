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

And go to http://localhost:9000/.

> Note that npm run start:dev will will serve a static index file and generate a dynamic bundle whereas
> npm run start:prod will do just the opposite, that is, generate a dynamic index file and serve a
> static bundle.

To run all tests and lints, run:

```
$ npm run all
```

## Tasks

* *npm start*: start application
* *npm run start:dev*: start application in development mode
* *npm run start:prod*: start application in production mode
* *npm run build:dev*: builds development bundle.js
* *npm run build:prod*: builds production bundle.js
* *npm run deploy*: deploys master branch to gh-pages branch
* *npm run less*: convert less files into css
* *npm run lint*: lint files
* *npm run test*: test files
* *npm run test:watch*: test files on the fly
* *npm run all*: lint and test files


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
* Update history package
* Try webpack 2
* Reactify github ribbon
* Fix mobile version
* Retest on every browser (including IE10+)
* Optimize word checking


## Pending Improvements

* *PatternLock*: find word using the mouse in a visually compelling way.
* *Local Dictionary*: quicker feedback in a time-pressured game.
* *IntroJS*: a nice tour for beginners on Boggle rules.
