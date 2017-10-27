import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import okrApp from './reducers/reducers'

let store = createStore(okrApp)

let rootElement = document.getElementById('app')

render(

   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)