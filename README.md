Boggle JS<br>
[![Build Status](https://travis-ci.org/lquixada/boggle.svg?branch=master)](https://travis-ci.org/lquixada/boggle)
[![codecov](https://codecov.io/gh/lquixada/boggle/branch/master/graph/badge.svg)](https://codecov.io/gh/lquixada/boggle)
[![dependencies Status](https://david-dm.org/lquixada/boggle/status.svg)](https://david-dm.org/lquixada/boggle)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
================

[![Greenkeeper badge](https://badges.greenkeeper.io/lquixada/boggle.svg)](https://greenkeeper.io/)

A multi-platform implementation of the Boggle game (only for study purposes). More info on https://en.wikipedia.org/wiki/Boggle.

* * *

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Getting Started](#getting-started)
-   [Pages](#pages)
-   [Platforms](#platforms)
-   [Architecture](#architecture)
-   [Stack](#stack)
-   [Other Projects](#other-projects)
-   [License](#license)
-   [Author](#author)

* * *

## Features

* Cross-browser (latest Firefox/Chrome and IE10)
* Cross-platform (works on server, browsers, mobiles and desktops)
* Responsive layout (from mobile to desktop)
* Secure connection with HTTPS
* Custom domain: www.bogglejs.com
* Cache management with Service Worker (still ongoing)


## Installation

```
$ git clone https://github.com/lquixada/boggle.git
$ cd boggle
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ nvm install
$ nvm use
$ yarn # or npm install
```


## Getting Started

The best way to start with Boggle is with its web version. In order to run the app in development mode, run:

```
$ yarn dev
```

And go to http://localhost:3000/.

> Note that in dev mode bundle.js will be served from memory whereas in prod mode it will be served from disk.

To run all tests and lints, run:

```
$ yarn test
```

The task used in production to run the app is:

```
$ yarn start
```

Boggle will be ready on http://localhost:3000/.


## Pages

* **/**: that's where the game is.
* **/about**: a little about my professional thinking (it can be also accessed through the footer link)


## Platforms

### Web

* **yarn web:build**: builds files and assets for server and client
* **yarn web:dev**: starts a webserver aimed for development (alias `yarn dev`)
* **yarn web:start**: starts a production ready webserver (alias `yarn start`)

To get started, run `yarn web:dev` or just `yarn dev`.


### iOS

* **yarn ios:dev**: starts the bundler server
* **yarn ios:eject**: re-create the iOS and Android folders and native code
* **yarn ios:build**: builds iOS app and starts it on iOS simulator

To get started, run `yarn ios:build`.

> You'll have to get your system properly configured in order for this to work. Go to the React Native's [Getting Started page](https://facebook.github.io/react-native/docs/getting-started.html), click on "Building Projects with Native Code", select your "Development OS", then "iOS" for "Target OS" and follow the instructions in the "Installing dependencies" section.


### Android

* **yarn android:dev**: starts the bundler server
* **yarn android:eject**: re-create the iOS and Android folders and native code
* **yarn android:build**: builds Android app and starts it on iOS simulator

To get started, run `yarn android:build`.

> You'll have to get your system properly configured in order for this to work. Go to the React Native's [Getting Started page](https://facebook.github.io/react-native/docs/getting-started.html), click on "Building Projects with Native Code", select your "Development OS", then "Android" for "Target OS" and follow the instructions in the "Installing dependencies" section.


### Desktop

* **yarn electron:build**: builds a new binary for the current operating system
* **yarn electron:start**: starts an electron app for development purposes

To get started, run `yarn electron:start`.


## Architecture

![Architecture](./flowchart.png)


## Stack

* **App**: react, redux, immutable.js
* **Style**: styled-components
* **Tests**: jest, codecov
* **Lint**: eslint
* **Benchmark**: clinic
* **Utils**: npm, webpack, babel
* **Mobile**: react-native
* **Desktop**: electron
* **CI**: [TravisCI](https://travis-ci.org/lquixada/boggle)
* **Infra**: [Heroku](https://bogglejs.herokuapp.com/), docker
* **SSL**: [Let's Encrypt](https://letsencrypt.org/)


## Other projects

This project relies on my other project called [cross-fetch](https://github.com/lquixada/cross-fetch), a universal WHATWG-compliant Fetch api for multiple platforms.


## License

boggle is licensed under the [MIT license](https://github.com/lquixada/boggle/blob/master/LICENSE) © [Leonardo Quixadá](https://twitter.com/lquixada/)


## Author

|[![@lquixada](https://avatars0.githubusercontent.com/u/195494?v=4&s=96)](https://github.com/lquixada)|
|:---:|
|[@lquixada](http://www.github.com/lquixada)|
