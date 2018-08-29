import React from 'react'
import { connect } from 'react-redux'

import { Input } from '../components'
import * as actions from '../../shared/actions'

export class InputContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      minLength: 2
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.started) {
      this.reset()
    }
  }

  handleChange (evt) {
    const value = evt.target ? evt.target.value : evt
    this.setValue(value)
  }

  handleEnter (evt) {
    if (this.state.value.length < this.state.minLength) {
      return
    }

    if (evt.which === 13) {
      this.handleSubmit(evt)
    }
  }

  handleSubmit (evt) {
    if (this.state.value.length < this.state.minLength) {
      return
    }

    this.props.addCheckedAttempt(this.state.value)
    this.reset()
    this.focus(evt.target)
  }

  focus (element) {
    if (element && element.focus) {
      element.focus()
    }
  }

  setValue (value) {
    this.setState({ value: value.trim() })
  }

  reset () {
    this.setValue('')
  }

  render () {
    return (
      <Input value={this.state.value}
        started={this.props.started}
        onChange={this.handleChange}
        onEnter={this.handleEnter}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = ({ started }) => ({ started })
export default connect(mapStateToProps, actions)(InputContainer)
