import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const root = document.getElementById('root')

ReactDOM.render(<App/>, root)

if (module && module.hot) {
  module.hot.accept()
}
