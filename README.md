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


## Stack

* Grunt
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


## TODO

* Simulate mobile devices
* Check grunt workflow
* TravisCI
* Game over alert
* Zero second
* Boggle logo
