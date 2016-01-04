# Boggle Game

A web-based implementation of the Boggle game.

More info on https://en.wikipedia.org/wiki/Boggle

## Installation

Go to the project root directory and run the following steps.

### Node.js

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
$ nvm install 0.12
$ nvm use 0.12
```

### App

```
$ npm install
$ npm install -g grunt-cli
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
* Run quality tools as you develop such as linting and testing.

When you develop a few things happens in the background:
* Code is linted
* Ciclomatic complexity is checked
* Browser is reloaded
* Specs are run
* Notify is something went wrong

## TODO

* "Qu" scenario
* What to do with big words? maxLength?
* View specs / TravisCI
* Game over alert
* Zero second
* Persist on localStorage?
* Test on IE10
* Boggle logo
* Implement event bus
* Use require.js
* Interface
  * Board: Pattern Lock (http://ignitersworld.com/lab/patternLock.html)
