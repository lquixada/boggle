Boggle JS<br>
[![Build Status](https://travis-ci.org/lquixada/boggle.svg?branch=master)](https://travis-ci.org/lquixada/boggle)
[![codecov](https://codecov.io/gh/lquixada/boggle/branch/master/graph/badge.svg)](https://codecov.io/gh/lquixada/boggle)
[![dependencies Status](https://david-dm.org/lquixada/boggle/status.svg)](https://david-dm.org/lquixada/boggle)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
================

A web-based implementation of the Boggle game for study purposes. More info on https://en.wikipedia.org/wiki/Boggle.


## Installation

```
$ git clone https://github.com/lquixada/boggle.git
$ cd boggle
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ nvm install
$ nvm use
$ npm install
```


## Development

To run the app in development mode, run:

```
$ yarn dev
```

And go to http://localhost:3000/.

> Note that in dev mode bundle.js will be served from memory whereas in prod mode it will be served from disk.

To run all tests and lints, run:

```
$ yarn test
```

> TravisCI will run a special version of this task: `yarn test:ci`. That includes code coverage report on the output and has integration with [codecov](https://codecov.io/).


## Production

The task used in production to run the app is:

```
$ yarn start
```

Boggle will be ready on http://localhost:3000/.


## Docker

There are also some docker tasks available.

* **yarn docker:pull**: downloads boggle's image
* **yarn docker:run**: runs a container with the app
* **yarn docker:build**: builds a new image for boggle
* **yarn docker:push**: updates boggle's image in the docker hub


## Features

* Cross-browser (latest Firefox/Chrome and IE10)
* Responsive layout (from mobile to desktop)
* Isomorphic, renders on server and client
* Secure connection with HTTPS
* Custom domain: www.bogglejs.com
* Cache management with Service Worker (still ongoing)


## Pages

* **/**: that's where the game is.
* **/about**: a little about my professional thinking (it can be also accessed through the footer link)


## Architecture

![Architecture](./flowchart.png)


## Stack

* **App**: react, redux, immutable.js
* **Style**: styled-components
* **Tests**: jest, codecov
* **Lint**: eslint
* **Benchmark**: clinic
* **Utils**: npm, webpack, babel
* **CI**: [TravisCI](https://travis-ci.org/lquixada/boggle)
* **Hosting**: [Heroku](https://bogglejs.herokuapp.com/)
* **SSL**: [Let's Encrypt](https://letsencrypt.org/)

