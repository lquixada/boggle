# Boggle Game

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
$ npm install -g grunt-cli bower
```

## Getting Started

To run the app locally, just run:

```
$ grunt server
```

## Development

If you wish to contribute to the project, I suggest using:

```
$ grunt work
```

It will do two things:
* Start the app on your browser
* Detect changes on less, js and html file to reload the browser

You may also run:

```
$ grunt watch:review
```

To check a few things during development:
* Code is linted
* Ciclomatic complexity is checked
* Browser is reloaded
* Specs are run
* Notify is something went wrong


## Grunt tasks

* grunt deploy: build + publish
* grunt lint: lint files
* grunt publish: publishes the build files on production
* grunt review: run lint + spec
* grunt server: start web server
* grunt spec: test specs
* grunt watch:build: monitor file changes and builds project
* grunt watch:review: monitor file changes and check code
* grunt work: run server + watch:build concurrently


## Stack

* Grunt
* NPM
* Bower
* Less
* Underscore
* jQuery
* Require.js


## Pending Improvements

* *React*: templates joined with views, modules would be more decoupled.
* *PatternLock*: find word using the mouse in a visually compelling way.
* *Local Dictionary*: quicker feedback in a time-pressured game.
* *Event Bus*: modules more decoupled.
* *IntroJS*: a nice tour for beginners on Boggle rules.
