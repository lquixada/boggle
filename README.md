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
$ npm start
```

And go to http://localhost:8080/.

In order to run the isomorphic app in production:

```
$ NODE_ENV=production npm start
```

And go to http://localhost:9000/.

> Note that in dev mode bundle.js will be served from memory whereas
> in prod mode it will be served from disk.

To run all tests and lints, run:

```
$ npm test
```

## Tasks

* *npm test*: runs all the tests
* *npm run test:mocha*: tests files
* *npm run test:lint*: lints files
* *npm run test:watch*: runs all the tests everytime some file changes
* *npm start*: starts application depending on NODE_ENV var
* *npm run start:dev*: starts application in development mode
* *npm run start:prod*: starts application in production mode
* *npm run build:dev*: builds all development assets
* *npm run build:prod*: builds all production assets
* *npm run deploy*: deploys project to heroku
* *npm run outdated*: lists all outdated packages
* *npm run update*: updates all outadted packages


## Stack

* App: react, redux, immutable.js
* Style: sass
* Tests: mocha, chai, enzyme, sinon
* Lint: eslint, sass-lint
* Utils: npm, webpack, babel
* CI: [TravisCI](https://travis-ci.org/lquixada/boggle)
* Hosting: [Heroku](https://bogglejs.herokuapp.com/)
* SSL: Let's Encrypt (https://letsencrypt.org/)


## TODO

* npm task for stress test
* New Relic Lite
* Progressive Web App Update Notification
* HTTP/2
* Retest on every browser (including IE10+)
