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

To run the app locally, run:

```
$ npm start
```

And go to [http://localhost:8080/].
To run all tests and lints, run:

```
$ npm run all
```


## Tasks

* *npm start*: start application
* *npm run build*: builds production bundle.js
* *npm run deploy*: deploys master branch to gh-pages branch
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
* [TravisCI](https://travis-ci.org/lquixada/boggle)


## TODO

* Update history package
* Find a free hosting service
* Use browserHistory
* Try webpack 2
* Reactify github ribbon
* Fix mobile version
* Retest on every browser (including IE10+)
* Optimize word checking
* Better .gitignore
* Update packages


## Pending Improvements

* *PatternLock*: find word using the mouse in a visually compelling way.
* *Local Dictionary*: quicker feedback in a time-pressured game.
* *IntroJS*: a nice tour for beginners on Boggle rules.
