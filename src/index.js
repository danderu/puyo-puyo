import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Game from './containers/Game'
import KeyEvents from './containers/KeyEvents'

const store = applyMiddleware(thunk)(createStore)(reducers)

const GameWithKeyEvents = KeyEvents(Game)

const PuyoPuyo = () => (
  <Provider store={ store }>
    <GameWithKeyEvents />
  </Provider>
)

export default PuyoPuyo
