import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Morty from './Morty'
import { StoreProvider } from './Store'

const root = document.getElementById('root')

ReactDOM.render(
  <StoreProvider>
    <Morty />
    <App />
  </StoreProvider>,
  root
)

if (module && module.hot) {
  module.hot.accept()
}
