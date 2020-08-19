import React from 'react'
import './assets/style/index.css'
import './assets/style/index.less'
import test from './assets/images/test.png'

const App = function (props) {
  return <div>
    <h1>hello </h1>
    <h2 style={{color:'blue'}}> test inline style </h2>
    <div>
      <img src={require('./assets/images/test.png')} alt=""/>
    </div>
    <div>
      <img src={test} alt=""/>
    </div>
  </div>
}

export default App
