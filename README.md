# Boggle Game [![Build Status](https://travis-ci.org/lquixada/boggle.svg?branch=master)](https://travis-ci.org/lquixada/boggle)

A web-based implementation of the Boggle game.

More info on https://en.wikipedia.org/wiki/Boggle

## Installation

Go to the install folder and run the following steps.

### Project

```
$ git clone https://github.com/lquixada/boggle.git
```

### Node.js

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
$ nvm install 0.12
$ nvm use 0.12
```

### App

```
$ cd boggle
$ npm install
$ npm install -g grunt-cli
```

## Getting Started

To run the app locally, just run:

```
$ npm run server
```

You may also run:

```
$ grunt review
```

To check a few things during development:
* Code is linted
* Ciclomatic complexity is checked
* Browser is reloaded
* Specs are run
* Notify is something went wrong

If you prefer to review your code at every push, run:

```
$ grunt githooks
```


## Grunt tasks

* *grunt lint*: lint files
* *grunt review*: run lint + spec


## Stack

* Webpack
* Grunt
* NPM
* Less
* Underscore
* jQuery
* [TravisCI](https://travis-ci.org/lquixada/boggle)


## Pending Improvements

* *React*: templates joined with views, modules would be more decoupled.
* *PatternLock*: find word using the mouse in a visually compelling way.
* *Local Dictionary*: quicker feedback in a time-pressured game.
* *Event Bus*: modules more decoupled.
* *IntroJS*: a nice tour for beginners on Boggle rules.
