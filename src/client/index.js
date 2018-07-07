import 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'

import HotApp from './hot-app'

ReactDOM.hydrate(<HotApp />, document.getElementById('app'))
