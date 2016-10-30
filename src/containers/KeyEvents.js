import React, { Component } from 'react'
import { SPACEBAR } from '../constants'

const KeyEventsHandler = (Composed) => class KeyEventsHandler extends Component {
  constructor (...args) {
    super(...args)
    this.handleKeyPress = this._handleKeyPress.bind(this)
    this.handleKeyDown = this._handleKeyDown.bind(this)
  }

  _handleKeyPress (evt) {
    evt.preventDefault()
    switch (evt.keyCode) {
      case SPACEBAR:
        this.props.onOrientationChanged()
    }
  }

  _handleKeyDown (evt) {
    evt.preventDefault()
    console.log('key down', evt)
  }

  render () {
    const props = {
      ...this.props,
      onKeyPress: this.handleKeyPress,
      onKeyDown: this.handleKeyDown
    }
    return <Composed {...props} />
  }
}

export default KeyEventsHandler
