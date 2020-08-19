import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

if (module && module.hot) {
  module.hot.accept()
}
