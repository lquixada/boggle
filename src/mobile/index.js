import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Game} from '../shared/components'
import store from './store'

export default class App extends Component {
  componentDidMount () {
    window.alert(`
      Disclaimer: this is a prototype of a multi-platform app, not a product.
      The gameplay is terrible, I know. Maybe it will improve some day.
    `)
  }

  render () {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}
