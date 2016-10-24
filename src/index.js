import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Game from './containers/Game'

const store = applyMiddleware(thunk)(createStore)(reducers)

const PuyoPuyo = () => (
  <Provider store={ store }>
    <Game />
  </Provider>
)

export default PuyoPuyo
